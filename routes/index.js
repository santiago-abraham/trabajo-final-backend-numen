const express = require('express');
const { verEvento, crearEvento, actualizarEvento, borrarEvento, consultaClima } = require('../controllers/controller');
const router = express.Router();

const{ validarId } = require("../middlewares/validarid");
const { check } = require("express-validator")


// Get (ver evento)
router.get('/ver', verEvento);
router.get('/clima/:ciudad', consultaClima)

//Post (crear evento)
router.post('/crear', 
[
    check("codigo")
        .not()
        .isEmpty()
        .withMessage("El codigo debe cargarse")
        .isNumeric()
        .withMessage("El codigo debe ser de tipo numerico"),
    check("nombre")
        .not()
        .isEmpty()
        .withMessage("El nombre debe cargarse"),
    check("tipo")
        .not()
        .isEmpty()
        .withMessage("El tipo debe cargarse"),
    check("Ciudad")
        .not()
        .isEmpty()
        .withMessage("La ciudad debe cargarse"),
    check("fecha")
        .not()
        .isEmpty()
        .withMessage("La fecha debe cargarse"),
    check("precio")
        .not()
        .isEmpty()
        .withMessage("El precio debe cargarse")
        .isNumeric()
        .withMessage("El precio debe ser de tipo numerico"),
    check("aireLibre")
        .not()
        .isEmpty()
        .withMessage("Debe cargarse si es al aire libre")
        .isBoolean()
] ,crearEvento);

//Put (actualizar evento)
router.put('/actualizar/:id', 
validarId,
[
    check("codigo")
        .not()
        .isEmpty()
        .withMessage("El codigo debe cargarse")
        .isNumeric()
        .withMessage("El codigo debe ser de tipo numerico"),
    check("nombre")
        .not()
        .isEmpty()
        .withMessage("El nombre debe cargarse"),
    check("tipo")
        .not()
        .isEmpty()
        .withMessage("El tipo debe cargarse"),
    check("ciudad")
        .not()
        .isEmpty()
        .withMessage("la ciudad debe cargarse"),
    check("fecha")
        .not()
        .isEmpty()
        .withMessage("La fecha debe cargarse"),
    check("precio")
        .not()
        .isEmpty()
        .withMessage("El precio debe cargarse")
        .isNumeric()
        .withMessage("El precio debe ser de tipo numerico"),
    check("aireLibre")
        .not()
        .isEmpty()
        .withMessage("Debe cargarse si es al aire libre")
        .isBoolean()
] ,actualizarEvento);

//Delete (borrar evento)
router.delete("/borrar/:id", validarId, borrarEvento)


module.exports = router;
