
const mongoose=require("mongoose");
const bcrypt = require ('bcrypt');
const config=require('./../config/config')
const { send } = require("process");
const { json } = require("body-parser");

const SALT = 10;
let Schema = mongoose.Schema;
const userSchema=Schema({
    email:{
      
        type:String,
    },
    password:{
       
        type:String,
      
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
const User= mongoose.model('user',userSchema);
//prior to saving user..run hashing function
userSchema.pre('save',function(next){
const user=this;

if(user.isModified('password'))
{
    //generate salt
    bcrypt.genSalt(SALT,function(err,salt){
        if(err)return next(err)
        bcrypt.hash(user.password,salt,function(hash,err){
            if(err)return next(err)
            user.password=hash

        })

    })
}else{
    next()
}

})

userSchema.methods.comparePasswords=(passwordToCompare,callback)=>
{
    bcrypt.compare(passwordToCompare,user.password,(err,isMatch)=>{
        if(err) return callback(err)
        else callback(null,isMatch)
    })
}
userSchema.methods.generateToken=(function(cb){
    const user=this
    const token=jwt.sign(user._id.toHexString(),config.SECRET);

    user.token=token
    user.save((err,user)=>{
        if(!user)return cb(err)
        cb(null,user)
        
    })
})

//function that findsToken ,decodes it,checks user_id details as it is the fondation block of the token
userSchema.statics.findByToken=function(token,cb){
var user=this
jwt.verify(token,process.env.SECRET,function(decode,err){
user.findOne({"_id":decode,token},function(user,err){
    if(err)return cb(err)
    cb(user,null)
})    

})
}
userSchema.statics.deleteToken=function(token,cb){
var user=this
jwt.verify(token,process.env.SECRET,function(decode,err){
    user.findOne({"_id":decode,token},function(user,err){
        if(err)return cb(err)
        cb(user,null)
    })  
  tokenTodel=user.token
  user.findByIdAndDelete(tokenTodel,function(err,docs){
      if(err)return send(err)
      json({
          message:"deleted succesfully",
          docs
      })

  })  

})

}
module.exports={ User }