const sql = require('../connections/conexionSqlServer');

module.exports = class Emocion {
    constructor(id, nombre, valor) {
        this.id = id;
        this.nombre = nombre;
        this.valor=valor;
    }

    static obtenerTodos() {
        return sql.connect().then(() => {
            return sql.query(`select * from EMOCIONES`).then((res) => {
                let emociones = [];
                res.recordset.forEach((r) => {
                    emociones.push(new Emocion(r.id_emocion, r.nombre, r.valor));
                });
                return emociones;
            }).catch((err) => {
                return Promise.reject(err.message);
            })
        });
    }
};