const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      enum: ['PENDING', 'IN PROGRESS', 'DELIVERED'],
      default: 'PENDING',
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    address:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UserAddress',
      required: true
    },
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Restaurant',
      required: false,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: false,
    },
    orderItems: [
      {
        item: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'MenuItem',
        },
        quantity: {
          type: Number,
          required: false,
          default: 1,
        },
      },
    ],
    orderDate: {
      type: Date,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model('Order', OrderSchema);

// @TODO - Write a method using mongoose hooks (pre-save), and
// calculate the 'totalAmount' dynamically by iterating over 'orderItems' array

module.exports = Order;
