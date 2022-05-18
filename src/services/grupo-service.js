const Grupo = require("../models/grupo");

const createGrupo = async (grupo) => {
    const newGrupo = new Grupo(grupo);
    await newGrupo.save();
    return newGrupo;
}

const getGrupos = async () => {
    const posts = await Grupo.find().lean().exec();
    return posts;
}

const getGrupo = async (id) => {
    const grupo = await Grupo.findById(id).lean().exec();
    return grupo;
}

const deleteGrupo = async (id) => {
    await Grupo.findByIdAndDelete(id).exec();
}

const updateGrupo = async (id, grupo) => {
    const updatedPost = await Grupo.findByIdAndUpdate(id, grupo, {
        returnDocument: "after"
    }).lean().exec();

    return updatedPost;
}

module.exports = {
    createGrupo, 
    getGrupos,
    getGrupo,
    deleteGrupo, 
    updateGrupo
}