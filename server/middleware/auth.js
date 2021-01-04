const { json } = require("body-parser")
const { userInfo } = require("os")
const {  User }=require("./../../server/models/user")


//auth function uses token to verify user is logged in 
let auth=(req,res,next)=>{

    let token=req.cookie.token
    user.findByToken(token,(user,err)=>{
        if(err)throw  err
        if(!user) res.status(400).send(err)
        res.token=token
        res.user=user
        next()

    })
}

module.exports= { auth}