const express = require("express")
const { ordersCreate, getByDate } = require("../controllers/order.control")
const orderRoutes = express.Router()

orderRoutes.post("/create", ordersCreate)
orderRoutes.get("/date/:start/:end", getByDate)

module.exports = orderRoutes



