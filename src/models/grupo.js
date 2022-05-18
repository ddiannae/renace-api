const mongoose = require("mongoose");

const GrupoSchema = new mongoose.Schema(
    {
        nombreGrupo: {
            type: String,
            required: true
        },
        nombreEncargado: {
            type: String,
            required: true
        },
        estado: {
            type: String,
            required: true
        },
        municipio: {
            type: String,
            required: true
        },
        cp: {
            type: Number,
            required: true
        },
        colonia: {
            type: String,
            required: true
        }, 
        calle: {
            type: String,
            required: true
        }, 
        numero: {
            type: String,
            required: true
        },
        telefonoContacto: {
            type: Number
        },
        emailContacto: {
            type: String,
            required: true
        },
        longitud: {
            type: Number,
            required: true
        },
        latitud: {
            type: Number,
            required: true
        },

    }
);


const GrupoModel = mongoose.model("Grupo", GrupoSchema);
module.exports = GrupoModel;
