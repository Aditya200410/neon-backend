// File: admin/backend/models/Order.js
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: String,
  items: [String],
  total: Number,
});

module.exports = mongoose.model("Order", orderSchema);
