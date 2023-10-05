const { Router } = require("express");
const { getModel, getModelById } = require("../controllers");
const { validateModel } = require("../middlewares");

const router = Router();

router.get("/:model", validateModel, getModel);

router.get("/:model/:id", validateModel, getModelById);


module.exports = router;