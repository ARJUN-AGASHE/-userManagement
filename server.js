const express= require("express")
const app =express()
require('dotenv').config()
const router = require("./routers/userRouter")
const dbConnection=require("./config/dbConnection")


app.set("view engine","ejs")
app.use(express.static("views"))
app.use(express.json())//facth vazhi varunnathine convert cheyyan
app.use(express.urlencoded({extended:true}))//form convert cheyyan
dbConnection()

app.use("/",router)

const Port=process.env.Port||3000
app.listen(Port,()=>{
    console.log(`server start on http://localhost:${Port}`);
    
})