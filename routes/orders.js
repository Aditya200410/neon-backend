// File: admin/backend/routes/orders.js
const express = require("express");
const Order = require("../models/Order");
const router = express.Router();

// Get all orders
router.get("/", async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});

// Create order
router.post("/", async (req, res) => {
  const newOrder = new Order(req.body);
  await newOrder.save();
  res.json(newOrder);
});

module.exports = router;
