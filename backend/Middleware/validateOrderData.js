const validateOrderData = (req, res, next) => {
    const {  paymentId,itemsOrdered, orderStatus, shippingMethod } = req.body;
    console.log(req.body);    
    // Check if required fields are present
    // if (!paymentId || !itemsOrdered || !Array.isArray(itemsOrdered) || itemsOrdered.length === 0) {
    //     return res.status(400).json({ success:false, message: 'User ID, items and payemt details ordered are required.' });
    // }
    if (!itemsOrdered || !Array.isArray(itemsOrdered) || itemsOrdered.length === 0) {
        return res.status(400).json({ success:false, message: 'User ID, items and payemt details ordered are required.' });
    }

    // Validate itemsOrdered structure
    for (const item of itemsOrdered) {
        if (!item.productId || !item.quantity || !item.price) {
            return res.status(400).json({ success:false, message: 'Each item must have a product ID, quantity, and price.' });
        }
        if (typeof item.quantity !== 'number' || item.quantity <= 0) {
            return res.status(400).json({ success:false, message: 'Quantity must be a positive number.' });
        }
        if (typeof item.price !== 'number' || item.price < 0) {
            return res.status(400).json({ success:false, message: 'Price must be a non-negative number.' });
        }
    }

    // Validate orderStatus if provided
    const validStatuses = ['Pending', 'Shipped', 'Delivered', 'Cancelled'];
    if (orderStatus && !validStatuses.includes(orderStatus)) {
        return res.status(400).json({ success:false, message: `Order status must be one of the following: ${validStatuses.join(', ')}` });
    }

    // Validate shippingMethod if provided
    const validShippingMethods = ['Standard', 'Express'];
    if (shippingMethod && !validShippingMethods.includes(shippingMethod)) {
        return res.status(400).json({ success:false, message: `Shipping method must be one of the following: ${validShippingMethods.join(', ')}` });
    }

    // If all validations pass, proceed to the next middleware
    next();
};

module.exports = validateOrderData;
