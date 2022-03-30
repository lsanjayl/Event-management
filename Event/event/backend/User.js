const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema({
   
        Title:{
            type: String,
            required: true,
        },
        Theme:{
            type: String,
            required: true,
        },
        Date:{
            type: String,
            required: true,
        },
        Duration:{
            type: String,
            required: true,
        },

});

const UserModel=mongoose.model("events",UserSchema)
module.exports=UserModel