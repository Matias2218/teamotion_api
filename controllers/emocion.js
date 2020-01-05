const estado = require("../models/emocion");

exports.getEmociones = (req, res, next) => {
    return estado.obtenerTodos().then((value)=>{
        res.status(200).json(value);
    }).catch((err) => {
        res.status(500).json({status: 500, mensaje: err});
    })
};