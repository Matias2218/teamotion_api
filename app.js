const express = require('express');
const bodyParser = require('body-parser');
const estadoRoutes =  require("./routes/estado");
const personaRoutes = require("./routes/persona");
const emocionRoutes = require("./routes/emocion");
const sql = require('mssql');


const app = express();



app.use(bodyParser.json());
app.use(estadoRoutes);
app.use(personaRoutes);
app.use(emocionRoutes);

app.listen(8080);