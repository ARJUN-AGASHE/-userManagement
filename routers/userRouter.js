const express = require('express')
const router = express.Router()
const {renderLoginpage,singupController}=require("../controller/userController")



router.get("/login",renderLoginpage)
router.post("/singup",singupController)


module.exports = router