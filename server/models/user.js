
const mongoose=require("mongoose");
const bcrypt = require ('bcrypt');
const config=require('./../config/config').get(process.env.NODE_ENV);
const { send } = require("process");
const { json } = require("body-parser");
const jwt=require('jsonwebtoken')

const SALT = 10;
const Schema = mongoose.Schema;
const userSchema=Schema({
    email:{
      
        type:String,
    },
    password:{
       
        type:String,
      
    },
    password2:{
        type:String
    },
    firstname:{
        type:String

    },
    lastname:{
        type:String

    },
    role:{
        type:String

    },token:{
        type:String

    }
    
    
})

//prior to saving user..run hashing function
userSchema.pre('save',function(next){
    var user = this;

    if(user.isModified('password')){
        bcrypt.genSalt(SALT,function(err,salt){
            if(err) return next(err);

            bcrypt.hash(user.password,salt,function(err,hash){
                if(err) return next(err);
                user.password = hash;
                next();
            })
        })
    } else {
        next()
    }
})


userSchema.methods.comparePasswords=function(passwordToCompare,cb)
{
    
    bcrypt.compare(passwordToCompare,this.password,(err,isMatch)=>{
        if(err) return cb(err)
         cb(null,isMatch)
    })

}


//generate toke to store user session.....its checked by the auth middleware to confirm whether
//user is logged in or not
userSchema.methods.generateToken=function(cb)
{
    let user=this
    let token=jwt.sign(user._id.toHexString(),config.SECRET)
    user.token=token
    user.save((err,user)=>{
        if(err)return cb(err)
        cb(null,user)
    })
}


//function that findsToken ,decodes it,checks user_id details as it is the fondation block of the token
userSchema.statics.findByToken=function(token,cb){
let user=this
jwt.verify(token,config.SECRET,function(err,decode){
user.findOne({"_id":decode,"token":token},function(err,user){
    if(err)return cb(err)
    cb(user,null)
})    

})
}



userSchema.methods.deleteToken=function(token,cb){
let user=this
user.update({$unset:{token:1}},(err,user)=>{
    if(err)return cb(err)
    cb(null,user)
})


}


const User = mongoose.model('User',userSchema)


module.exports={ User }