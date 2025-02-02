const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    orderId: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    },
    itemsOrdered: [{
        // _id: false,  // Prevent automatic _id generation
        productId: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Product',  
            required: true 
        },
        quantity: { 
            type: Number, 
            required: true 
        },
        price: { 
            type: Number, 
            required: true 
        }
    }],
    orderStatus: {
        type: String, 
        enum:['Pending','Shipped','Delivered','Cancelled'], 
        default:'Pending'
    },  
    shippingMethod:{
        type:String, 
        enum:['Standard', 'Express'], 
        default:'Standard'
    },  
    // paymentId:{
    //     type: mongoose.Schema.Types.ObjectId, 
    //     ref: 'Payment',  
    //     required: true 
    // },  
    createdAt:{
        type: Date, 
        default: Date.now  
    }  
});

// Create the Order model from the schema
const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
