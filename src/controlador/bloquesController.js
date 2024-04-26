import {crearBloquesModelos} from '../modelo/bloquesModelo.js'


export const crearBloquesControlador = async (req,res) =>{
    try{
        let bloque = req.body;
        if(!bloque || !bloque.nombre){
            return res.status(400).json({
                status: "error",
                message: "Faltan datos por enviar"
            });
        }
        try{
            
            let respuesta = await crearBloquesModelos(bloque.nombre);
            
            bloque.id = respuesta.insertId;
            if(respuesta){
                // devolver respuesta
                return res.status(200).json({
                    status: "success",
                    message: "Bloque creado con exito....",
                    bloque
                }); 
            }else{
                // devolver respuesta
                return res.status(400).json({
                    status: "error",
                    message: "No se a podido regitrar el Bloque...",
                });
            }
        }catch(error){
            return res.status(500).json({
                status: "error",
                message: 'Ocurrió un error, contacte al administrador de sistemas.' + error
            });
    }

    }catch(error){
        return res.status(500).json({
            status: "error",
            message: 'Ocurrió un error, contacte al administrador de sistemas.' + error
        });
    }
    
    
}