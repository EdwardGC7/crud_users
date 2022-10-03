const router = require('express').Router()
const userServices = require('./users.services')

//Manejo de las rutas disponibles
router.get('/users', userServices.getUsers)
router.post('/users', userServices.createNewUser)
router.get('/users/:id', userServices.getOneUser)


module.exports = router
