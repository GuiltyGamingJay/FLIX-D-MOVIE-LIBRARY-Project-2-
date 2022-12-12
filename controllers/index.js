const router = require("express").Router();

const apiRoutes = require("./api");

router.use('/', homeRoutes);
router.use("/api", apiRoutes);

// may need to be in homeRoutes - check with TA
router.get("/signup", async (req, res) => {
    res.render()
})

module.exports = router;