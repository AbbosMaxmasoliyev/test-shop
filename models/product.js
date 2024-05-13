const mongoose = require('mongoose');
const { Schema } = mongoose;

// Mahsulot va Order uchun schema va model yaratish
const MahsulotSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        require: true
    },
    massa: {
        type: Number,
        required: true
    },
    measurement: {
        type: String,
        require: true
    }
});

const Product = mongoose.model("Product", MahsulotSchema)


const OrderSchema = new Schema({
    items: [{
        code: {
            type: String,
            required: true
        },
        massa: {
            type: Number,
            required: true
        }
    }],
    cost: {
        type: Number,
        require: true
    },
    time: {
        type: Number,
        default: new Date().getTime()
    }
});



const Order = mongoose.model("Order", OrderSchema)



module.exports = { Order, Product }