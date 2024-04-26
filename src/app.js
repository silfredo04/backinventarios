import express from 'express';
import cors from 'cors';
import {conexion}  from './bd/bd.js';
import rutaBloques from './rutas/bloquesRutas.js'

// conexion de bd
conexion.getConnection();


console.log('Api inventario arrancada !!');

// creando servidor node

const app = express();

// configurando cors para poder conectar con un front
app.use(cors());

// convertir los datos que lleguen en cada peticion, datos del body a objetos Json;
app.use(express.json());
app.use(express.urlencoded({extended:true}));


// rutas bloques

app.use('/api',rutaBloques)

//no existe ruta

app.use((req,res,next)=>{
    res.status(404).json({
        status:"Error",
        message:"Esta ruta no existe"
    });
})

export default app;