import { Router } from "express";
import {crearBloquesControlador} from "../controlador/bloquesController.js"

const router = Router();

router.post("/bloques/crear",crearBloquesControlador)

export default router;