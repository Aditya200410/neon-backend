// File: admin/backend/server.js
require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRoutes = require("./routes/products");
const orderRoutes = require("./routes/orders");
const authRoutes = require('./routes/auth'); // Assuming your auth routes are here
const lovedRoutes = require('./routes/loved'); // Assuming your loved routes are here
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection URL from environment variable
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/ecommerce";

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected to:", MONGODB_URI))
  .catch(err => console.error("MongoDB connection error:", err));

// API Routes
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
const shopRoutes = require('./routes/shop');
app.use('/api/shop', shopRoutes);
const bestSellerRoutes = require('./routes/bestSeller');
app.use('/api/bestseller', bestSellerRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/loved', lovedRoutes);

// Port from environment variable
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));




