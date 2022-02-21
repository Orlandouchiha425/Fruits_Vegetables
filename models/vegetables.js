const mongoose=require('mongoose')
const vegetablesSchema= new mongoose.Schema({
    name:String,
    color: String,
    readyToEat:Boolean
})


const Vegetable=mongoose.model('Vegetable', vegetablesSchema)
module.exports=Vegetable;


