const express = require('express')
const mong = require ('mongoose')
const ProductRoutes = require ('./routes/product')
const app = express()




//connect ke cluster di cloud.mongodb
mong.connect('mongodb+srv://adum:adum123456@cluster0-8k6cp.mongodb.net/ecommerce',
    { useNewUrlParser :true},
    ()=>{
        console.log('terhubung ke mongodb')
    }
) 

app.use('/products' , ProductRoutes)

app.listen(8000)



