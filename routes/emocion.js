const express = require("express");

const emocionController = require("../controllers/emocion");

const router = express.Router();

router.get('/emociones', emocionController.getEmociones);

module.exports  = router;