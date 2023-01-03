const {Evento} = require("../models/Evento");

const validarId = async (req, res, next) => {
    const item = await Evento.findById(req.params.id);
    if (item !== null) {
        next()
    } else {
        res.status(500).json({msg: "ID no econtrado..."});
    }
};

module.exports={ validarId }