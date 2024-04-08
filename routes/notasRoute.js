const express = require('express');
const rutas = express.Router();
const notasModel = require('../models/notas');

rutas.get('/litar', async (req, res) =>{
    try {
        const notas = await notasModel.find();
        // console.log(tareas);
        res.json(notas);
    }
    catch(error){
        res.status(404).json({mensaje: error.message});
    }
});

rutas.post('/agregar', async (req, res) =>{
    // console.log(req.body);
    const nuevaTarea = new notasModel({
        ID_del_Estudiante: req.body.ID_del_Estudiante,
        Nombre: req.body.Nombre,
        Apellido_Paterno :req.body.Apellido_Paterno,
    Apellido_Materno :req.body.Apellido_Materno,
    Curso:req.body.Curso,
    Materia :req.body.Materia,
    Nota_1:req.body.Nota_1,
    Nota_2 : req.body.Nota_2,
    Nota_3 :req.body.Nota_3,
    Promedio:req.body.Promedio,
    Fecha_de_Registro :req.body.Fecha_de_Registro,
    Comentario :req.body.Comentario,
    Docente:req.body.Docente,
    Tutor:req.body.Tutor,
    Direccion :req.body.Direccion
    });
    try {
        const guardarTarea = await nuevaTarea.save();
        res.status(201).json(guardarTarea);
        
    } catch(error){
        res.status(400).json({mensaje: error.message});
    }
});

rutas.put('/editar/:id', async (req, res) =>{
    try {
        const actualizarTarea = await notasModel.findByIdAndUpdate(req.params.id, req.body, { new: true});
        res.status(201).json(actualizarTarea);
        
    } catch(error){
        res.status(400).json({mensaje: error.message});
    }
});

rutas.delete('/eliminar/:id', async (req, res) =>{
    try {
        const eliminarTarea = await notasModel.findByIdAndDelete(req.params.id);
        res.json({mensaje: 'Tarea eliminada correctamente'});
        
    } catch(error){
        res.status(400).json({mensaje: error.message});
    }
});


//consultas ----------------------
// - Listar todas las tareas con prioridad 5
rutas.get('/notaMayor', async (req, res) =>{
    try {
        console.log(req.params.id);
        const tareasPrioridad = await notasModel.findOne().sort({ Promedio: -1 });
        res.json(tareasPrioridad);
    }
    catch(error){
        res.status(404).json({mensaje: error.message});
    }
});

rutas.post('/busquedaDocente', async (req, res) =>{
    // console.log(req.body);
    const nuevaTarea = new notasModel({
       
    Docente:req.body.Docente
    });
    try {
        const tareasPrioridad = await notasModel.find({ Docente: req.body.Docente});
        res.json(tareasPrioridad);
        
    } catch(error){
        res.status(400).json({mensaje: error.message});
    }
});

rutas.post('/busquea', async (req, res) =>{
    // console.log(req.body);
    const nuevaTarea = new notasModel({
       
    Docente:req.body.Docente
    });
    try {
        const tareasPrioridad = await notasModel.find({ Docente: req.body.Docente});
        res.json(tareasPrioridad);
        
    } catch(error){
        res.status(400).json({mensaje: error.message});
    }
});

// - Ordenar las notas de forma ascendente
rutas.get('/ordenarNotas', async (req, res) =>{
    try {
        const tareasASC = await notasModel.find().sort({Promedio: 1});
        res.json(tareasASC);
    }
    catch(error){
        res.status(404).json({mensaje: error.message});
    }
});
//// - Consultar una tarea especifica por Id
//rutas.get('/tarea/:id', async (req, res) =>{
//    try {
//        console.log(req.params.id);
//        const tarea = await TareaModel.findById(req.params.id);
//        res.json(tarea);
//    }
//    catch(error){
//        res.status(404).json({mensaje: error.message});
//    }
//});
//// - Eliminar todas las tareas con una prioridad determinada
//rutas.delete('/eliminar-prioridad/:prioridad', async (req, res) =>{
//    try {
//        console.log(req.params.prioridad);
//        const prioridad = req.params.prioridad
//        const eliminarTareas = await TareaModel.deleteMany({prioridad});
//        res.json({mensaje: 'Tareas eliminada correctamente'});
//        
//    } catch(error){
//        res.status(400).json({mensaje: error.message});
//    }
//});
//// - Consultar la tarea mas reciente anadida a la base de datos
//rutas.get('/tarea-reciente', async (req, res) =>{
//    try {
//        const tarea = await TareaModel.findOne().sort({_id: -1});
//        res.json(tarea);
//    }
//    catch(error){
//        res.status(404).json({mensaje: error.message});
//    }
//});
module.exports = rutas;