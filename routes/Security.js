const express = require("express");
const route = express.Router();
const Password = require('../model/Password')


route.post('/password', async (req, res)=>{
    const getPassword = await Password.find()
    var setPassword;
    if(getPassword.length==1){
        setPassword = await Password.updateOne({},{password:req.body.pin})
    }else{
        const password = new Password({
            password: req.body.pin
        })
        password.save()
    }
    res.send(setPassword);
    // console.log(req.body.confirmPin, req.body.pin)
});

route.get('/password/status', async (req, res)=>{
    const passwordStatus = await Password.find()
    let status;
    if(passwordStatus.length>0){
        console.log('password exist')
        status=true
    }else{
        console.log('password not exist')
        status=false
    }
    res.send(status)
})

route.get('/getpassword', async (req, res)=>{
    const getPassword = await Password.find()
    res.send(getPassword)
})



module.exports = route;