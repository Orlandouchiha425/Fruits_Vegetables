const express = require('express');
const app = express();
const fruits=require('./models/fruits');
const vegetables = require('./models/vegetables');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


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

//INDEX  Weedk 10 day 3
app.get('/fruits',(req,res)=>{
    // res.send(fruits)
    res.render('fruits/Index',{ fruits })
});

app.get('/vegetables',(req,res)=>{
    // res.send(fruits)
    res.render('vegetables/Index',{ vegetables })
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



//CREATE Week 11 day 1
app.post('/fruits',(req, res)=>{
    if(req.body.readyToEat==='on'){
        req.body.readyToEat=true
    }else{
        req.body.readyToEat=false
    }
    fruits.push(req.body)
    res.redirect('/fruits')
})


app.post('/vegetables',(req,res)=>{
    if(req.body.readyToEat==='on'){
        req.body.readyToEat=true
    }else{
        req.body.readyToEat=false
    }
    vegetables.push(req.body)
})
// EDIT



//SHOW
app.get('/fruits/:indexOfFruitsArray',(req,res)=>{
    // res.send(fruits[req.params.indexOfFruitsArray])
    res.render('fruits/Show',{
        fruit:fruits[req.params.indexOfFruitsArray]
    })
})


app.get('/vegetables/:indexOfVegetablesArray',(req,res)=>{
    res.render('vegetables/Show',{
    vegetable:vegetables[req.params.indexOfVegetablesArray]
    })
})


app.listen(3000, () => {
    console.log('If your reading this Im still listening')})