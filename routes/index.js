const express = require('express');
const { verEvento, crearEvento, actualizarEvento, borrarEvento } = require('../controllers/controller');
const router = express.Router();

// const{ validarId } = require("../middlewares/validarid");
const { check } = require("express-validator")


/* Get (ver evento). */
router.get('/ver', verEvento);

//Post (crear evento)
router.post('/crear', 
[
    check("codigo")
        .not()
        .isEmpty()
        .withMessage("El codigo debe cargarse")
        .isNumeric()
        .withMessage("El codigo debe ser de tipo numerico"),
    check("marca")
        .not()
        .isEmpty()
        .withMessage("La marca debe cargarse"),
    check("precio")
        .isNumeric()
        .withMessage("El precio debe ser de tipo numerico")
        .isLength({min:0, max:5})
        .withMessage("El precio ingresado debe ser de maximo 5 digitos")
] ,crearEvento);

//Put (actualizar evento)
router.put('/actualizar/:id', 
// validarId,
[
    check("codigo")
        .not()
        .isEmpty()
        .withMessage("El codigo debe cargarse")
        .isNumeric()
        .withMessage("El codigo debe ser de tipo numerico"),
    check("marca")
        .not()
        .isEmpty()
        .withMessage("La marca debe cargarse"),
    check("precio")
        .isNumeric()
        .withMessage("El precio debe ser de tipo numerico")
        .isLength({min:0, max:5})
        .withMessage("El precio ingresado debe ser de maximo 5 digitos")
] ,actualizarEvento);

//Delete (borrar evento)
router.delete("/borrar/:id",// validarId,
borrarEvento)


module.exports = router;
