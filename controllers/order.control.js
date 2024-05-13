const { Product, Order } = require("../models/product");

async function ordersCreate(req, res) {
    let items = req.body.order
    try {
        // Orderdagi itemlarni oling

        // items bo'yicha Mahsulot kodlarini oling
        const codes = items.map(item => item.code);
        // console.log(codes);
        // Mahsulotlarni toping
        const mahsulotlar = await Product.find({
            code: { $in: codes }
        });
        let codesObject = {}

        mahsulotlar.map(product => {
            codesObject[product.code] = { price: product.price }
        })

        let cost = 0

        console.log(mahsulotlar);
        // Mahsulotlarni yangilash
        for (const item of items) {
            // Mahsulotni qidirish
            const mahsulot = mahsulotlar.find(m => {
                console.log(m, " =>Code M");
                console.log(item);
                return m.code === item.code
            });
            // console.log(mahsulot);
            if (mahsulot) {
                // Mahsulotning massasini yangilash
                mahsulot.massa = mahsulot.massa - item.massa;

                // Yangilangan mahsulotni saqlash
                await mahsulot.save();


                cost += item.massa * codesObject[item.code].price
            }
        }


        let createdOrder = await Order.create({ items, cost })

        res.status(200).send({ success: true, order: createdOrder })
    } catch (err) {
        console.error('Xatolik yuz berdi:', err);
    }
}



async function getByDate(req, res) {
    let { start, end } = req.params
    try {

        let orders = await Order.find({
            time: {
                $gt: start,  // code qiymati 12 dan katta bo'lishi kerak
                $lt: end   // code qiymati 18 dan kichik bo'lishi kerak
            }
        })

        if (!orders.length) {
            res.status(400).send({ success: false, msg: "Ushbu vaqtda savdo bo'lmagan" })
            return
        }
        res.status(200).send({ success: true, orders })
        return

    } catch (err) {
        console.error('Xatolik yuz berdi:', err);
    }
}






module.exports = { ordersCreate, getByDate }