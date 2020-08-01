const User = require('../models/User');
const Restaurant = require('../models/Restaurant');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');

//@desc     Get all restaurants
//@route    GET /api/v1/restaurants
//@access   Public
exports.getAllRestaurants = asyncHandler(async (req, res, next) => {
  
  // Query all the restaurants
  const restaurants = await Restaurant.find({});

  res.status(200).json({
    success: true,
    count: restaurants.length,
    data: restaurants
  });
});

//@desc     Get all restaurants`
//@route    GET /api/v1/restaurants/:city
//@access   Public
exports.getAllRestaurantsByCity = asyncHandler(async (req, res, next) => {
  
  // Query the restaurants by city
  const restaurants = await Restaurant.find({"address.city": req.params.city});

  res.status(200).json({
    success: true,
    count: restaurants.length,
    data: restaurants
  });
});

exports.addRestaurant = asyncHandler(async (req, res, next) => {
  
  const isRestaurant = req.user.isRestaurant;

  if(!isRestaurant){
    return next(
      new ErrorResponse('You are not authorized to add a restaurant', 401)
    );
  }

  req.body.user = req.user.id;
  
  const restaurant = await Restaurant.create(req.body);
  res.status(201).json({ success: true, data: restaurant });
});




