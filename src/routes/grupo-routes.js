//Bring router
const {Router} = require('express')
const {getGrupo, getGrupos, updateGrupo, createGrupo, deleteGrupo} = require('../controllers/grupo-controller')

//Instance router
const router = Router()

router.get('/grupo', getGrupos)
router.post('/grupo', createGrupo)
router.get('/grupo/:id', getGrupo)
router.put('/grupo/:id', updateGrupo)
router.delete('/grupo/:id', deleteGrupo)

module.exports = router