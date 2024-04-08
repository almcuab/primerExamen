const mongoose = require('mongoose');

const notasSchema = new mongoose.Schema({
    ID_del_Estudiante: String,
    Nombre :String,
    Apellido_Paterno :String,
    Apellido_Materno :String,
    Curso:String,
    Materia :String,
    Nota_1:Number,
    Nota_2 : Number,
    Nota_3 :Number,
    Promedio:Number,
    Fecha_de_Registro :Date,
    Comentario :String,
    Docente:String,
    Tutor:String,
    Direccion :String
      
})

const notasModel = mongoose.model('Proyect',notasSchema,'proyect');
module.exports = notasModel;