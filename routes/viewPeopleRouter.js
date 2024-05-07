const router = require("express").Router();
const { getViewsPeople } = require("../services/viewPeopleServices");

router.get("/people", getViewsPeople);

module.exports = router;
