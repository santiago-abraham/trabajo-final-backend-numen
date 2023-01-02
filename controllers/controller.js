const { validationResult } = require("express-validator");
const {Evento} = require("../models/Evento");

const verEvento = async (req,res)=>{
    const evento=await Evento.find();
    res.json({evento});
};

const crearEvento=async(req, res) =>{
    try{
    const evento=new Evento(req.body);
    await evento.save();
    res.status(201).json({msg:"El evento ha sido guardado exitosamente.",
evento: evento,
});
} catch (error){
    console.log(error.message)
}
};

const actualizarEvento = async (req,res)=>{
    try {
        const error=validationResult(req);
        if (error.isEmpty()) {
            await Evento.findByIdAndUpdate(req.params.id, req.body);
            res.status(201).json({msg: "Evento actualizado"});
        } else{
            res.status(501).json({msg: error})
        }
    } catch (error) {
        console.log(error.message);
    }
}

const borrarEvento = async(req, res) => {
    try {
        const evento=await Evento.findByIdAndDelete(req.params.id);
        res.json({msg: "Evento eliminado", evento})
    } catch (error) {
        console.log(error.message);
    }
} 

module.exports={verEvento, crearEvento, actualizarEvento, borrarEvento}