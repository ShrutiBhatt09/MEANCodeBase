const MenuItem = require('../models/MenuItem');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');
const Restaurant = require('../models/Restaurant');
const { response } = require('express');

//@desc     Add a menu item
//@route    POST /api/v1/menuitems
//@access   Private (only for restaurant users)
exports.addMenuItem = asyncHandler(async (req, res, next) => {

  // Check if the user is a restaurant
  if (!req.user.isRestaurant) {
    return next(
      new ErrorResponse('User not authorized to add a menu item', 401)
    );
  }

  //Fetch the restaurant to user of the restaurant
  const restaurant = await Restaurant.findById(req.body.restaurantId).populate('user')

  // Check if the user is trying to add menu item ot their restaurant
  if (req.user.id !== restaurant.user.id) {
    return next(
      new ErrorResponse('You can only add menu items to your restaurants')
    )
  } 

  // Tag the userID to the menu item
  req.body.menuItem.user = req.user.id

  // Push the menu item to the menu array  
  restaurant.menu.push(req.body.menuItem)
  
  const restaurantWithMenuItems = await restaurant.save()

  res.status(201).json({ success: true, data: restaurantWithMenuItems.menu.slice(-1) });
});

//@desc     Delete a menu item
//@route    DELETE /api/v1/menuitems/:menuItemId
//@access   Private (only for restaurant users)
exports.deleteMenuItem = asyncHandler(async (req, res, next) => {

  const reqRestaurantId = req.query.restaurantId
  const reqMenuItemId = req.params.menuItemId

  // Check if the user is a restaurant
  if (!req.user.isRestaurant) {
    return next(
      new ErrorResponse('User not authorized to delete a menu item', 401)
    );
  }

  const isValidUser = await doesUserHaveAccessToRestaurant(req.user.id, reqRestaurantId)

  if(!isValidUser){
    return next(
      new ErrorResponse('User does not have access to the restaurant', 403)
    )
  }

  const restaurant = await Restaurant.findById(reqRestaurantId)

  // Check if the menu item exists
  const menuItems = restaurant.menu

  const menuItem = menuItems.find(menuItem => {
    return menuItem.id === reqMenuItemId
  })

  if (!menuItems.length || !menuItem) {
    console.log('weeeeeeeeeee')
    return next(
      new ErrorResponse(
        `No menu item found with id ${req.params.menuItemId}`,
        404
      )
    );
  }


  // If everything goes well, then remove the menu item
  if (restaurant.menu.id(reqMenuItemId).status.toLowerCase() === 'inactive') {
    return next(
      new ErrorResponse(
        'This menu item is already deactivated'
      )
    )
  }

  restaurant.menu.id(reqMenuItemId).status = 'inactive'
  const updatedData = await restaurant.save()
  const data = updatedData.menu.id(reqMenuItemId)

  // The following statement permanently removes the menuItem from the database
  // const data = await restaurant.menu.pull({_id: reqMenuItemId})

  await restaurant.save()

  res.status(200).json({
    success: true,
    data: data
  });
});

//@desc     Get all menu items for a restaurant user
//@route    GET /api/v1/menuitems
//@access   Private (only for restaurant users)
exports.getAllMenuItems = asyncHandler(async (req, res, next) => {
  // Check if the user is a restaurant
  if (!req.user.isRestaurant) {
    return next(new ErrorResponse('Unauthorized access', 401));
  }

  const menuItems = await MenuItem.find({ user: req.user.id });

  res.status(200).json({ success: true, data: menuItems });
});

//@desc     Get all menu items for a restaurant user
//@route    GET /api/v1/menuitems/:restaurantId
//@access   Public
exports.getMenuItemsByRestaurant = asyncHandler(async (req, res, next) => {

  const restaurant = await Restaurant.findById(req.params.restaurantId);

  if(!restaurant){
    return next(
      new ErrorResponse('No such restaurant found', 404)
    )
  }

  const menuItems = restaurant.menu.filter(menuItem => menuItem.status === 'active')
  console.log(restaurant.menu)

  if (!menuItems.length) {
    return next(
      new ErrorResponse('No menu items found for this restaurant', 404)
    );
  }

  const data = {
    restaurantId: restaurant.id,
    menutItem: menuItems
  }

  res.status(200).json({ success: true, count:menuItems.length, data: data });
});

const doesUserHaveAccessToRestaurant = async (userId, restaurantId) => {

  // Get the Restaurant by restaurand id
  const restaurant = await Restaurant.findById(restaurantId).populate('user')

  console.log(restaurant)

  // Check if the user has access to the restaurant
  if (userId !== restaurant.user.id) {
    return false
  }  

  return true
}