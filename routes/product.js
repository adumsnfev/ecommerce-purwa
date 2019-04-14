const express = require ('express')
const router = express.Router()
const Product = require ('../models/product')

router.get('',(req,res)=>{
    res.send('halaman product')
})
// //insert baru
// new Product({
//     name: 'product contoh'
// }).save().then(()=>{
//     console.log('sukses input')
// })


module.exports = router