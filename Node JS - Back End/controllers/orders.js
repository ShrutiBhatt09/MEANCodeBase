const Order = require('../models/Order');
const User = require('../models/User');
const MenuItem = require('../models/MenuItem');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');

const Restaurant = require('../models/Restaurant')
const UserAddress = require('../models/UserAddress')
const mongoose = require('mongoose')

//@desc     Get all orders for a restaurant
//@route    GET /api/v1/orders
//@access   Private (Only a customer user can create an order)
exports.getAllOrders = asyncHandler(async (req, res, next) => {
  let query;
  // if (req.user.isRestaurant) {
  //   query = {
  //     restaurant: req.query.restaurandId
  //   };
  // } else {
  //   query = {
  //     user: req.user.id
  //   };
  // }

  query = {user: req.user.id}

  const user = await User.findById(req.user.id)
  console.log(user)

  // TODO: Populate Order Items
  const orders = await Order.find(query).populate('address')

  res.status(200).json({ success: true, count: orders.length, data: orders });
});

//@desc     Create a new order
//@route    POST /api/v1/orders/:restaurantId
//@access   Private (Only a customer user can create an order)
exports.createOrder = asyncHandler(async (req, res, next) => {
  // Check if user is a restaurant user
  if (req.user.isRestaurant) {
    return next(
      new ErrorResponse('User not authorized to place an order', 401)
    );
  }

  // if (
  //   !req.body.totalPrice ||
  //   !req.body.itemList ||
  //   req.body.itemList.length < 1
  // ) {
  //   return next(
  //     new ErrorResponse(
  //       'Please send both total price and item list with at least one item',
  //       400
  //     )
  //   );
  // }

  
  const user = await User.findById(req.user.id).populate('address')

  // Match if the address exists with the user
  const userAddress = user.address.find((address) => address.id === req.body.address)

  console.log(userAddress + ' is found')

  if (!userAddress) {
    return next(
      new ErrorResponse('The address does not exist with the user', 401)
    )
  }

  req.body.user = req.user.id;
  req.body.restaurant = req.params.restaurantId
  const order = await Order.create(req.body);

  // const returnOrder = await Order.findById(order.id)
  //   .populate({
  //     path: 'restaurant',
  //     select: 'name imagePath address id'
      // select: 'typeOfFood userName userCity userCountry userProfileImageUrl'
    // })
    // .populate('address')
    // .populate({
    //   path: 'user',
    //   select: 'userName userEmail userCity userCountry userProfileImageUrl'
    // })
    // .populate({
    //   path: 'itemList',
    //   model: MenuItem,
    //   select: 'chooseItemType itemImageUrl itemIngredients itemPrice itemTitle'
    // });

  res.status(201).json({
    success: true,
    data: order
  });
});

//@desc     Update Order Status
//@route    PUT /api/v1/orders/:orderId
//@access   Private (Only a restaurant user can update the order status)
exports.updateOrderStatus = asyncHandler(async (req, res, next) => {
  // Check if the user is not a normal user
  if (!req.user.isRestaurant) {
    return next(new ErrorResponse('User not authorized to update orders', 401));
  }
  // Check if orderId is being sent
  if (!req.params.orderId) {
    return next(new ErrorResponse('Order Id is required', 400));
  }
  

  

  let order = await Order.findById(req.params.orderId);

  // Check whether the order exists
  if (!order) {
    return next(
      new ErrorResponse(`No order found with the id ${req.params.orderId}`, 400)
    );
  }

  // Check if the user has access to the order
  console.log(order.restaurant === req.params.orederId, ' has access')

  const { status } = req.body;
  // Check whether the status has been supplied
  if (!status) {
    return next(new ErrorResponse('Please send the updated status', 400));
  }

  
  // TODO: Check if the restaurant user has access to the restaurant

  // Check if the order belongs to this restaurant user
  // if (req.user.id.toString() !== order.restaurant.toString()) {
  //   return next(
  //     new ErrorResponse('Restaurant not authorized to update this order', 401)
  //   );
  // }

  order = await Order.findByIdAndUpdate(
    req.params.orderId,
    { status },
    { new: true }
  )

  // populate order items

  // .populate({
  //   path: 'restaurant',
  //   select: 'name imagePath address id'
  // })
  // .populate('address')
    // .populate({
    //   path: 'restaurant',
    //   select: 'typeOfFood userName userCity userCountry userProfileImageUrl'
    // })
    // .populate({
    //   path: 'user',
    //   select: 'userName userEmail userCity userCountry userProfileImageUrl'
    // })
    // .populate({
    //   path: 'itemList',
    //   model: MenuItem,
    //   select: 'chooseItemType itemImageUrl itemIngredients itemPrice itemTitle'
    // });

  res.status(200).json({ success: true, data: order });
});
