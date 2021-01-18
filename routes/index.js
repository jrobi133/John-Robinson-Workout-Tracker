const router = require("express").Router();
const apiRoutes = require("./api/workouts");
const homeRoutes = require("./homeRoutes");

router.use("/api", apiRoutes);

router.use("/", homeRoutes);

router.use((req, res) => {
    res.send("<p>not a route.</p>")
});

module.exports = router;