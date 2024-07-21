const express = require("express");
const router = express.Router();
const {getAllProduct,getProductByName} =require('../Controllers/Product')


router.get("/getAllProduct",getAllProduct);
router.get("/getProduct/:name",getProductByName);


module.exports = router;