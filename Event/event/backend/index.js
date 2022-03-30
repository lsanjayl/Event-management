const express=require("express")
const app=express()
const mongoose = require('mongoose');
const UserModel = require("./User");

const cors=require("cors");

app.use(express.json());
app.use(cors());
mongoose.connect('mongodb://localhost:27017/event', {
    dbName: 'event',
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => err ? console.log(err) : 
    console.log('Connected to database'));

    app.get("/forms",(req,res)=>{
        UserModel.find({},(err,result)=>{
            if(err){
                res.json(err)
            }
            else{
                res.json(result)
            }
        })
    })

    app.post("/createuser",async(req,res)=>{
        const user=req.body;
        const newUser=new UserModel(user);
        await newUser.save()
        res.json(user);
    })



    app.listen(3001,()=>{
        console.log("SERVER runs perfect")
    })