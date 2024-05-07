const router = require("express").Router();
const peopleRouter = require("./peopleRouter");
const viewsRouter = require("./viewPeopleRouter");

router.use("/people", peopleRouter);
router.use("/views", viewsRouter);

module.exports = router;
