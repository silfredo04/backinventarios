import { conexion } from "../bd/bd.js";


export const crearBloquesModelos = async (nombre) =>{
    try{
        const [respuesta] = await conexion.query("INSERT INTO bloques (nombre) VALUES (?)",[nombre]);
        return respuesta;
    }catch(error){
        return error;
    }
}