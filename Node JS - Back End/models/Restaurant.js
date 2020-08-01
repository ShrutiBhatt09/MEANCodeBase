const mongoose = require('mongoose');
const UserAddressSchema = require('./UserAddress').schema;
const MenuItemSchema = require('./MenuItem').schema

const RestaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    category: {
      type: String,
    },
    deliveryEstimate: {
      type: String,
    },
    rating:{
      type: Number,
    },
    imagePath: {
      type: String,
    },
    about: {
      type: String,
    },
    hours: {
      type: String,
    },
    type: {
      type: String,
    },    
    address: {
      addressLine1: {
        type: String,
        required: true,
      },
      addressLine2: {
        type: String,
      },
      area:{
        type: String,
        required: [true, 'Please enter the area']
      },
      city: {
        type: String,
        required: [true, 'Please enter the city'],
      },
      state: {
        type: String,
        required: [true, 'Please enter a state'],
      },
      zipcode:{
        type: String,
        required: [true, 'Please enter the zipcode']
      },
      country: {
        type: String,
        required: false,
      },
    },   
    menu: [MenuItemSchema],
    status: {
      type: String,
      required: [true, 'Please enter the restaurant status']
    },    
    reservation: {
      type: mongoose.Schema.Types.ObjectId,
      required: false
    },
    review: {
      type: mongoose.Schema.Types.ObjectId,
      required: false
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },  
  },
  {
    timestamps: true,
  }
);

const Restaurant = mongoose.model('Restaurant', RestaurantSchema);

module.exports = Restaurant;
