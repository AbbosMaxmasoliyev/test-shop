const express = require("express")
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRouter = require("./routes/product.routes");
const { createProduct } = require("./controllers/product.controls");
const orderRoutes = require("./routes/order.routes");
const uploadRouter = require("./routes/upload.routes");
//Set up default mongoose connection





mongoose.connect("mongodb+srv://abbos:salom1245!qaqnusopiy@atlascluster.1vt5ihu.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster" || MONGODB_OFFLINE, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
// salom1245!qaqnusopiy

app.use(bodyParser())


app.use("/product", productRouter)
app.use("/order", orderRoutes)



app.listen(4001, () => {
    console.log("Server is running 4000");
})