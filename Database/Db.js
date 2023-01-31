require('dotenv').config();
const mongoose = require("mongoose");
// mongoose.set('strictQuery', false);


const  url = "mongodb://0.0.0.0:27017/cfmDB"
// const  url = process.env.MONGODB_url;

const Connection = () =>{
    mongoose.connect(url, (err)=>{
        if(!err){
            console.log("database is connected")
        }else{
            console.log("database is not connected", err)
        }
    })
}

module.exports = Connection;