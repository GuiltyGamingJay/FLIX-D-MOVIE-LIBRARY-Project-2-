const router = require('express').Router();
const {Product, Category, Cart} = require("../models/index")
const auth = require('../utils/auth');


router.get("/", async (req, res) =>{

    let products = await Product.findAll({include: Category})    



    res.render("homepage", {
        products: products,
        logged_in: req.session.logged_in
    })
   


})

router.get("/login", (req, res) => {
    let data = {
        session: req.session
    }
    res.render("login", data)
})

router.get("/signup", (req, res) => {
    let data = {
        session: req.session
    }
    res.render("signup", data)
})

router.get("/dashboard",  async (req, res) => {

            
    let data = {
        session: req.session,
         }
    res.render("dashboard", data)
    
})

router.get("/cart", async (req, res) => {
    let cartData = await Cart.findAll({
        where: {user_id: req.session.user_id}
    })
    let product_ids = []


    if(cartData == null || cartData == undefined){
        cartData = []
    }

    cartData.forEach(function(obj){
    if(obj.dataValues.product_id != undefined){
        product_ids.push(parseInt(obj.dataValues.product_id))        
    }
    })   
    console.log(product_ids)

    
    let products = await Product.findAll({
        include: [Category, Cart],
        where: {
            id: product_ids
        },
        group: ["product_id"]
    })

    let data = {
        session: req.session,
        products: products
         }
    res.render("cart", data)
    
})


module.exports = router
