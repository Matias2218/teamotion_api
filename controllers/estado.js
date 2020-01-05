const estado = require("../models/estado");

exports.getEstados = (req, res, next) => {
  estado.obtenerTodos().then((value)=>{
      res.status(200).json(value);
  })
};