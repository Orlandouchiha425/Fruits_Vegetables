const mongoose=require('mongoose')

const fruitsSchema= new mongoose.Schema({
    name: String,
    color: String,
    readyToEat:Boolean
})



const Fruit=mongoose.model('Fruit', fruitsSchema)

module.exports=Fruit;




// const fruits=[
//     {
//         name:'apple',
//         color:'red',
//         readyToEat:true
//     },
//     {
//         name:'pear',
//         color: 'green',
//         readyToEat:false
//     },
//     {
//         name:'bannana',
//         color:'yellow',
//         readyToEat:true
//     }

// ];


// module.exports=fruits