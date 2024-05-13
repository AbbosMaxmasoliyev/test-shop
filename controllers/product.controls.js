const { Product } = require("../models/product")

async function createProduct(req, res) {
    let { code, name, price, massa } = req.body

    try {
        let createdProduct = await Product.create({ code, name: name.toLowerCase(), price, massa })

        res.status(200).send({ success: true, msg: `${createdProduct.name} successfully created` })
        return
    } catch (error) {
        console.log(error);
        if (error.code === 11000) {
            res.status(400).send({ success: false, msg: "Product already exists" })
            return
        }


        res.status(500).send({ success: false, msg: "Internal server error" })
        return
    }
}



async function getByName(req, res) {

    let { name } = req.body
    let regExp = new RegExp(`\^${name}\\s`)
    try {

        console.log(regExp);
        let findProduct = await Product.find({
            name: regExp
        })
        console.log(findProduct);
        if (!findProduct.length) {
            res.status(200).send({ success: false, msg: "Products not found" })
            return
        }
        res.status(200).send({ success: true, msg: findProduct })
        return
    } catch (error) {


        res.status(500).send({ success: false, msg: "Internal server error" })
        return
    }
}


async function getByCode(req, res) {

    let { code } = req.params
    try {

        let findProduct = await Product.findOne({
            code
        })

        if (!findProduct) {
            res.status(200).send({ success: false, msg: "Product not found" })
            return
        }
        res.status(200).send({ success: true, msg: findProduct })
        return
    } catch (error) {


        res.status(500).send({ success: false, msg: "Internal server error" })
        return
    }
}















module.exports = { createProduct, getByName, getByCode }