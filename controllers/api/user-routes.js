const router = require("express").Router();
const { User } = require("../../models");

// CREATE new user -- SIGNUP
router.post("/", async (req, res) => {
  try {
    const dbUserData = await User.create({
      name: req.body.username,
      email: req.body.email,
      password: req.body.password,
      // {
      //     "name": "Random123",
      //     "email": "random@gmail.com",
      //     "password": "password12345"
      // }
    });
    console.log(dbUserData);
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.loggedInUserData = dbUserData;

      console.log("Logged in", req.session.loggedIn);

      return res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

//  GET User by Id -- Which User
router.get("/:id", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!dbUserData) {
      res.status(404).json({ message: "No users with this Id" });
      return;
    }
    res.json(dbUserData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// user login -- LOGIN
router.post("/login", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      console.log("TEST invalid dbUserData");

      res.status(400).json({
        message: "Incorrect email or password. Please try again!",
      });
      return;
    }
    //checks that password is valid using custom instance method in ./models/user.js
    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      console.log("TEST INVALID PASSWORD");

      res.status(400).json({
        message: "Incorrect email or password. Please try again!",
      });
      return;
    }
    //save data to session for use elsewhere
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.loggedInUserData = dbUserData;
      console.log("🚀", req.session.cookie);

      res.status(200).json({
        user: dbUserData,
        message: "You are now logged in!",
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// User Logout -- LOGOUT
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
