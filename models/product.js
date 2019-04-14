const mong = require ('mongoose')

const {Schema} = mong

const productSchema = new Schema ({
    name:String,
    rating:Number,
    timeStamp:Date,
    variants: [{
        slug:String,
        name:String,
        images:[String],
        description:String,
        weight:Number,
        quantity:Number,
        soldquantity:Number,
        wishListCount:Number,
        price:Number,
        discount:Number,
    }],
    reviews:[{
        userID:String,
        rating:Number,
        content:String,
        image:String,
        timeStamp:Date
    }]
})

const Product = mong.model('product', productSchema) //akan generate collection product

module.exports = Product