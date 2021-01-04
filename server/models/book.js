const mongoose=require("mongoose");
let Schema = mongoose.Schema;
const bookSchema=Schema({
    
    author:{
        
        type:String,

    },
    name:{
        
        type:String,
      
    },
    review:{
        type:String

    },
    pages:{
        type:Number

    },
    rating:{
        type:Number,
        min:1,
        max:5

    },
    price:{
        type:Number

    },
    ownerId:{
        type:Number,
     

    }
})
const Book=mongoose.model('Book',bookSchema);

module.exports={ Book }