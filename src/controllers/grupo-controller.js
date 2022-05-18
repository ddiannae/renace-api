const grupoService = require("../services/grupo-service");

const getGrupos = async (req, res, next) => {
  try {
    const grupos = await grupoService.getGrupos();
    res.setHeader("Total", grupos.length);
    res.json(grupos);
  } catch (error) {
    next(error);
  }
};

const getGrupo = async (req, res, next) => {
  const id = req.params.id;
  try {
    const grupo = await grupoService.getGrupo(id);
    // TO DO. This actually sends an error and not 404
    if (!grupo) {
      return res.status(404).json({ message: "El grupo no existe" });
    }
    res.json(grupo);
  } catch (error) {
    next(error);
  }
};

const createGrupo = async (req, res) => {
  const newGrupo = req.body;

  try {
    const savedGrupo = await grupoService.createGrupo(newGrupo);
    res.status(201).json(savedGrupo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Error." });
  }
};

const updateGrupo = async (req, res, next) => {
  const id = req.params.id;
  const grupoToUpdate = req.body;

  try {
    const updatedGrupo = await grupoService.updateGrupo(id, grupoToUpdate);
    if (!updatedGrupo) {
      return res.status(404).json({ message: "El grupo no existe" });
    }
    res.json(updatedGrupo);
  } catch (error) {
    next(error);
  }
};

const deleteGrupo = async (req, res, next) => {
  const id = req.params.id;
  try {
    await grupoService.deleteGrupo(id);
    return res.status(404).json({ message: "Groupo borrado correctamente" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getGrupos,
  getGrupo,
  createGrupo,
  updateGrupo,
  deleteGrupo,
};
