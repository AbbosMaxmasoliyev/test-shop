const express = require("express")
const { createProduct, getByName } = require("../controllers/product.controls")
const productRouter = express.Router()

productRouter.post("/create", createProduct)
productRouter.get("/get", getByName)

module.exports = productRouter



