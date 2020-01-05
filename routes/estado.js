const express = require("express");

const estadoController = require("../controllers/estado");

const router = express.Router();

router.get('/estados', estadoController.getEstados);

module.exports  = router;