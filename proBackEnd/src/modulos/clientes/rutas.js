const express = require('express');
//Importar respuestas
const respuesta= require('../../red/repuesta');
const controlador=require('./controlador');
const { eliminar } = require('mysql2');
const router= express.Router();


router.get('/',async function(req,res){
    try{
        const items= await controlador.todos();
        respuesta.success(req,res,items,200);  
       }
       catch(err){
        respuesta.error(req,res,err,500)
       }
    
});
router.get('/:id', async function (req, res) {
   try {
      const items = await controlador.uno(req.params.id);
      respuesta.success(req, res, items, 200);
   } catch (err) {
      console.error('Error al obtener el ítem:', err); // Log del error para depuración
      respuesta.error(req, res, 'Error al obtener el ítem', 500); // Mensaje de error más claro
   }
});

//aqui voy a separar las rutas de lafuncionalidad para las 2 rutas faltantes
router.post('/add', async function agregar(req,res,next){
    try{
     const items= await controlador.agregar(req.body);
     if(req.body.id==0){
        mensaje= 'guardado con exito';
     }else{
        mensaje= 'actualizado con exito';
     }
     respuesta.success(req,res,items,201);   
    }
    catch(err){
     next(err);
    }
 });


router.put('/', async function eliminar(req,res,next){
    try{
     const items= await controlador.eliminar(req.body);
     respuesta.success(req,res,"Item eliminado con exito",200);   
    }
    catch(err){
     next(err);
    }
 });

module.exports= router;