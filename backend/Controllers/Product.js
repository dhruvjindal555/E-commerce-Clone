const Product = require('../Models/ProductSchema');



async function getAllProduct(req, res) {
    try {
        const products = await Product.find({})
        res.status(200).json({ "success": true, "data": products, "message": "Successfully fetched all products" })
        console.log(products.length);
    } catch (err) {
        console.log("An error occurred while logging in: " + err.message);
        return res.status(500).json({ "success": false, "message": 'Error fetching all products', "error": err.message })
    }
}

async function getProductByName(req, res) {
    const { name } = req.params;

    try {
        const product = await Product.findOne({ name });

        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found',
            });
        }

        res.status(200).json({
            success: true,
            message: 'Product retrieved successfully',
            data: product,
        });
    } catch (error) {
        console.error('Error fetching product by name:', error.message);
        res.status(500).json({
            success: false,
            message: 'Error fetching product by name',
            error: error.message,
        });
    }
}

module.exports = { getAllProduct, getProductByName }