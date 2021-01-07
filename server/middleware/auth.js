const { json } = require("body-parser")
const { userInfo } = require("os")
const {  User }=require("./../../server/models/user")


//auth function uses token to verify user is logged in 
let auth=(req,res,next)=>{

    let token=req.cookies.auth
    User.findByToken(token,(user,err)=>{
        if(err)throw  err
        if(!user)return res.json({
            error:true
        }) 
        req.token=token
        req.user=user
        next()

    })
}

module.exports= { auth }