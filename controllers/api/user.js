const router = require("express").Router();
const { response } = require("express");
// const { Product, Users, Cart, Category } = require('../../models');
const { Users } = require('../../models');
// const { tableName } = require("../../models/Product");

router.post("/", async (req, res) => {  
  try {
    const userData = await Users.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/", async (req, res) => {
  let users = await Users.findAll();

  res.json(users);
});

router.post("/login", async (req, res) => {
  try {
    const userData = await Users.findOne({ where: { username: req.body.username } });

    if (!userData) {console.log("failed to log in");
      res
        .status(400)
        .json({ message: "Incorrect username or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect username or password, please try again" });
      return;
    }

    req.session.save(async () => {
      const data = await Cart.findAll({ where: { user_id: userData.id },
        include:   Product
        })
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
    
  }
});

router.get("/logout", async (req, res) => {
  if (req.session.logged_in) {
 

    
    await req.session.destroy(() => {

      
    });
  } 
  res.redirect("/")
});

router.get("/cart", async (req, res) => {
  const data = await Cart.findAll({ where: { user_id: req.session.user_id },
  include:   Product
  })
  res.json(data);

})

// STARTING HERE FOR PUT METHOD FOR BACKLOG FUNCTIONALITY
// NEED TO MOVE LOGIC TO SCRIPT.JS AS FRONT END CODE - FRONT END LOGIC CANNOT BE INSIDE OF A PUT
router.put("/addGame", withAuth, async (req, res) => {
  console.log(req.body)
  if (req.session.logged_in = true) {
    //req.session.save(() => {

      // divElementNameofgamefromProductSeeds_js_file is just a placeholder for now
      // await document.getElementsByClassName(example-draggable).addEventListener("onDragStart", savedGames.push(divElementNameofGamefromProductSeeds_js_file))
    }    
  else {
    throw(err);
  }
})
// Now need to export the savedGames[] array and display it on a 'user Profile' handlebars page


module.exports = router;