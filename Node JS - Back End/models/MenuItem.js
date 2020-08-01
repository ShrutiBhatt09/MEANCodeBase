const mongoose = require('mongoose');

const MenuItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add an item title'],
    },
    category: {
      type: String,
      required: [true, 'Please add an item category'],
    },
    description: {
      type: String,
      required: [true, 'Please add some information about the item'],
    },
    price: {
      type: Number,
      required: [true, 'Please add the item price'],
    },
    imagePath: {
      type: String,
      required: [false, 'Please add an item image'],
    },
    foodType: {
      type: String,
      required: [true, 'Please add the food type'],
    },
    maxCount: {
      type: Number,
      required: [true, 'Please add the maximum count'],
    },
    status: {
      type: String,
      required: [true, 'Please add the item status'],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const MenuItem = mongoose.model('MenuItem', MenuItemSchema);

module.exports = MenuItem;
