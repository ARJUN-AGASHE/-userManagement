const mongoose=require("mongoose")//it connect db and server


function dbConnection (){
    mongoose.connect("mongodb://localhost:27017/userManagement").then(()=>{
        console.log("database connected..!!!");
        
    }).catch((err)=>{
        console.log(err);
        
    })
}


module.exports=dbConnection