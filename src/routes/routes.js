//Configuración de las rutas
import express from "express";

const router = express.Router();

//importar controllers
const { renderIndex, renderForm, renderEnviado} = require("../controllers/controllers.js")

router.get("/", renderIndex );
router.get("/enviar", renderForm);
router.post("/enviado", renderEnviado)

module.exports = router;
