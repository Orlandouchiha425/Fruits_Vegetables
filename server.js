require('dotenv').config()
console.log(process.env.MONGO_URI)
const express = require('express');
const mongoose=require('mongoose');
// const { findOneAndUpdate } = require('./models/fruits');
// const { findOneAndUpdate } = require('./models/vegetables');
const app = express();
const Fruit=require('./models/fruits');
const Vegetable = require('./models/vegetables');


// const createEngine=reactviews.createEngine
// const renderFile=createEngine()

//MVC SETUP
//Views
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());



//Models
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
})


// mongoose.connect(process.env.MONGO_URI2,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
// }) 

// MIDDLEWARE
app.use(express.urlencoded({extended:true}))
app.use((req,res,next)=>{
    console.log(req.body)
    next()
})
// const fruits = ['apple', 'banana', 'pear'];

// app.get('/:indexOfFruitsArray', (req, res) => {
//     res.send(fruits[req.params.indexOfFruitsArray]);
// });


// app.get('/hello/:firstname/:lastname', (req, res) => {
//     console.log(req.params);
//     console.log(req.query);

//     res.send('hello ' + req.params.firstname + ' ' + req.params.lastname);
// })


// 7 Restful route === INDEX NEW DELETE UPDATE CREATE EDIT SHOW

//INDEX  Weedk 10 day 3/ changed on 11day2
app.get('/fruits',(req,res)=>{
    // res.send(fruits)
  Fruit.find({}, (err, foundFruits)=>{
      if(err){
          res.status(400).send(err)
      }else{
          res.render('fruits/Index',{
              fruits: foundFruits
          })
      }
  })
});

//INDEX Vegetables

app.get('/vegetables',(req,res)=>{
    // res.send(fruits)

    Vegetable.find({}, (err, foundVegetables)=>{
        if(err){
            res.status(400).send(err)
        }else{
            res.render('vegetables/Index',{
                vegetables: foundVegetables
            })
        }
    })
});



//NEW

app.get('/fruits/new',(req,res)=>{
    res.render('fruits/New')
})

app.get('/vegetables/new',(req,res)=>{
    res.render('vegetables/New')
})

//DELETE


//UPDATE



//CREATE Week 11 day 1/updated week 11 day 2
app.post('/fruits',(req, res)=>{
    if(req.body.readyToEat==='on'){
        req.body.readyToEat=true
    }else{
        req.body.readyToEat=false
    }

    Fruit.create(req.body,(err, createdFruit)=>{
        if(err){
            res.status(403).send(err)
        }else{
            console.log(createdFruit)
            res.redirect('/fruits')
        }
    })
})

//Create Vegetables

app.post('/vegetables',(req,res)=>{
    if(req.body.readyToEat==='on'){
        req.body.readyToEat=true
    }else{
        req.body.readyToEat=false
    }

    Vegetable.create(req.body,(err, createdVegetable)=>{
        if(err){
            res.status(403).send(err)
        }else{
            console.log(createdVegetable)
            res.redirect('/vegetables')
        }
    })
})
// EDIT



//SHOW week10day3 updated on week11day2
app.get('/fruits/:id',(req,res)=>{
    // res.send(fruits[req.params.indexOfFruitsArray])
    Fruit.findById(req.params.id, (err,foundFruit)=>{
        if (err){
            res.status(400).send(err)
        }else{
            res.render('fruits/Show',{
                fruit:foundFruit
            })
        }
    })
})







app.get('/vegetables/:id',(req,res)=>{
    Vegetable.findById(req.params.id, (err,foundVegetable)=>{
        if (err){
            res.status(400).send(err)
        }else{res.render('vegetables/Show',{
            vegetable:foundVegetable
        })}
    })
})


app.listen(3000, () => {
    console.log('If your reading this Im still listening')})