const sql = require('../connections/conexionSqlServer');

module.exports = class Estado {
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }

    static obtenerTodos(){
        return sql.connect().then(() => {
            return sql.query(`select * from ESTADOS`).then((res)=>{
                let estados = [];
                res.recordset.forEach((r)=>{
                    estados.push(new Estado(r.id_estado, r.nombre));
                });
                return estados;
            });
        }).catch((err) =>{
            return err;
        });
    }
};