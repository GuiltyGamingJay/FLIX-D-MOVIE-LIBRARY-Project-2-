const router = require("express").Router();

const userRoutes = require("./user-routes");
const genreRoutes = require("./genre-routes");
const gamesRoutes = require("./games-routes");

router.use("/users", userRoutes);
router.use("/genre", genreRoutes);
router.use("/games", gamesRoutes);

module.exports = router;