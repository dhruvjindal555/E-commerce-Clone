const express = require('express');

const fetchUser = require('../Middleware/fetchUser'); // Import your middleware functions
const validateOrderData = require('../Middleware/validateOrderData');
const {createOrder, getAllOrders, getOrder, updateOrder, deleteOrder} = require('../Controllers/Order')
const router = express.Router();

// Middleware to check authentication and validate order data
router.use(fetchUser);

// Create a new order
router.post('/', validateOrderData, createOrder);

// Get all orders
router.get('/',getAllOrders);

// Get a specific order by ID
router.get('/:id',getOrder);

// Update an order by ID
router.put('/:id', validateOrderData,updateOrder);

// Delete an order by ID
router.delete('/:id', deleteOrder);

module.exports = router;
