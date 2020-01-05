const persona = require("../models/persona");

exports.autenticarPersona = async (req, res, next) => {
    const correo = req.body.correo;
    const clave = req.body.clave;
    try {
        const value = await persona.autenticarPersona(correo, clave);
        return res.status(200).json(value);
    } catch (err) {
        if (err instanceof  Error) {
            res.status(500).json({err: err})
        }
        else
        {
            res.status(400).json({err: err})
        }
    }
};

