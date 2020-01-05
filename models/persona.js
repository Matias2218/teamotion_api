const sql = require('../connections/conexionSqlServer');



module.exports = class Persona {
    constructor(id, nombre, apellido, fechaNacimiento, correo, clave, idRol, idEstado) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.correo = correo;
        this.clave = clave;
        this.idRol = idRol;
        this.idEstado = idEstado;
    }

   /* static obtenerTodos(){
        return sql.connect().then(() => {
            return sql.query(`select * from ESTADOS`).then((res)=>{
                let estados = [];
                res.recordset.forEach((r)=>{
                    estados.push(new Estado(r.id_estado, r.nombre));
                });
                return estados;
            });
        });
    }*/

   static autenticarPersona(correo, clave)
   {

       return sql.connect().then(() => {
           return sql.query(`select * from PERSONAS where correo = '${correo}' and clave = '${clave}'`).then((res)=> {
               let personas = [];
               res.recordset.forEach((r) => {
                   personas.push(new Persona(r.id_persona, r.nombre, r.apellido, r.fecha_nacimiento, r.correo, r.clave, r.id_rol, r.id_estado));
               });
               if (personas.length === 0) {
                   throw {err: "error en la consulta"};
               } else {
                   return personas[0];
               }
           });
       }).catch(err =>{
           return Promise.reject(err);
       });
   }
};