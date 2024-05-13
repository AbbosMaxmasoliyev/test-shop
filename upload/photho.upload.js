const multer = require("multer")



const storage = multer.diskStorage({

    destination: function (req, file, cb) {
        console.log(file);
        cb(null, './files')
    },
    filename: function (req, file, cb) {

        let fileExtensionName = file.originalname.split(".")

        console.log(file);

        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        
        cb(null, file.fieldname + '-' + uniqueSuffix + "." + fileExtensionName[fileExtensionName.length - 1])
    }
})

const upload = multer({ storage: storage })


module.exports = upload