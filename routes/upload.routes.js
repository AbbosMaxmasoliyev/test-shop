const express = require("express")
const upload = require("../upload/photho.upload")
const uploadRouter = express.Router()

uploadRouter.post("/create-avatar", upload.single("avatar"), (req, res) => {
    let file = req.file
    console.log(file);

})

uploadRouter.post("/create-logo", upload.single("logo"), (req, res) => {
    let file = req.file
    console.log(file);

})

module.exports = uploadRouter



