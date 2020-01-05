const express = require("express");

const personaController = require("../controllers/persona");

const router = express.Router();

router.post('/autenticarPersona', personaController.autenticarPersona);

module.exports  = router;