const mongoose = require("mongoose");

const Schema=mongoose.Schema;
const eventoSchema=new Schema({
    codigo: {
        type: Number,
        require: true,
        unique: true
    },
    nombre: {
        type: String,
        require: true
    },
    tipo: {
        type: String,
        require: true
    },
    ciudad: {
        type: String,
        require: true
    },
    fecha: {
        type: String,
        require: true
    },
    precio: {
        type: Number,
        require: true
    },
    aireLibre: {
        type: Boolean,
        require: true,
    }
});

const Evento = mongoose.model("Evento", eventoSchema);

module.exports={Evento};