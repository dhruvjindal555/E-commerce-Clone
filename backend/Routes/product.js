const express = require("express");
const router = express.Router();
const {getAllProduct,getProductById} =require('../Controllers/Product')


router.get("/getAllProduct",getAllProduct);
router.get("/getProduct/:id",getProductById);


module.exports = router;