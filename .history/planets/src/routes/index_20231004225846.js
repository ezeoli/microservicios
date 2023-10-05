const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const router = Router();

router.get("/planets", middlewares.planetValidation ,controllers.getPlanets);

module.exports = router;