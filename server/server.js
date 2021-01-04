const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

//set config setting based on envmt..both db  and secret key
const config=require('./config/config');

const app = express();



mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/booksShelf");
app.use(bodyParser.json());
app.use(cookieParser());

const { User }=require("./models/user");
const { Book }=require("./models/book");
const { json } = require('body-parser');
const {auth}=require('./middleware/auth');

const port=process.env.PORT || 3001
app.listen(port,()=>{
    console.log("The server is running on ")
})

//post
//post
//route api book req to 
app.post('/api/book',(req,res)=>{
    //create an instance of the book model
    //pass the json object request received(ie req.body) to the book model
    const book=new Book(req.body)
    book.save((err,doc)=>{
        if(err)return res.status(400).send(err)
        res.status(200).json({
            post:true,
            id:doc.id
        })
    })
})

//get one bookbased on id
app.get("/api/getBook",(req,res)=>{
    let id=req.query.id
  
  Book.findById(id,(err,doc)=>{
 if(err)return res.status(400).send(err)
 res.send(doc)
   })

})
//get all books
app.get("/api/getAllBooks",(req,res)=>{
    //You need  to limit number of searches and sort the searches

   let skip=parseInt(req.query.skip)
   let limit=parseInt(req.query.limit) 
   let order=req.query.order 
   Book.find().skip(skip).sort({_id:order}).limit(limit).exec((err,doc)=>{
       if(err) return res.status(400).send(err);
       res.send(doc);
   })
    
})

app.post('/api/bookUpdate',(req,res)=>{  
    Book.findByIdAndUpdate(req.body._id,req.body,{new:true},(err,doc)=>{
        if(err) return res.status(400).send(err)
        res.json({
            success:true,
            doc
        })
    })
})


app.get('/api/bookDelete',(req,res)=>{
    const id=req.query.id
    Book.findByIdAndRemove(id,(err,doc)=>{
        if(err) return res.status(400).send(err)
        res.json(true)  
    })
})


/***************************** User*********************************/

app.post('/api/register',(req,res)=>{

    const user=new User(req.body)
    user.save((err,doc)=>{
        if(err)return res.send(err).status(400)
        res.status(200).json({
            success:true,
            user:doc
        })
    })
})


app.post('api/login',(req,res)=>{
    //find the email address received from the req.body.emeil field
user.findOne({"email":req.body.email},(err,user)=>{
    if(!user)return res.send(err).json({
        message:"username incorrect",
        isAuth:false
    })
    //if email is found,compare it to the password that is storesin the database
    //the comparePasswords method is implemented in the user.js file
    //If no match return value in isAuth is false
    user.comparePasswords(req.body.password,(err,isMatch)=>{
    if(!isMatch)return res.json({message:"password is incorrect ", isAuth:false})
    //generate a token that ca be used to authenticate user as they 
    //move todifferent pages
    user.generateToken((err,user)=>{
        if(err)return res.status(400).send(err)
        res.cookie('auth',user.token).json({
            isAuth:true,
            id:user._id,
            email:user.email
        })
    })

    })


})
})


//Get the reviewer given the ownerId which essentially comes from the id in the user collection
app.get('/api/getReviewer',(req,res)=>{
    const id=req.query.id
    user.findById(id,(err,doc)=>{
        if(err)return status(400).send(err)
        res.json({
            name:doc.name,
            lastname:doc.lastname
            
        })
    })
})

//Get all the users
app.get('/api/users',(req,res)=>{
    user.find({},(err,users)=>{
        if(err)return res.status(400).send(err)
        res.status(200).send(users)
    })
})


//get the posts belonging to a certain user
app.get('/api/getUserPosts',(req,res)=>{
    user.findById({ownerId:req.user.id},(err,docs)=>{
        if(err)return res.status(400).send(err)
        res.status(200).send(docs)
    })
})


app.get('/api/logout',auth,(req,res)=>{
    req.user.deleteToken(token,(user,err)=>{
        if(err) return res.status(400).send(err)
        res.status(200)
    })
  
    
    })
