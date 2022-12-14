const { getAllUsers, getUserById, createUser} = require('./users.controllers')

//Manejo de la peticion optener usuarios
const getUsers = (req, res) => {
  const usersList = getAllUsers()[0]

  if(usersList){
    res.status(200).json( getAllUsers())
  } else{
    res.status(404).json({message: 'No data to show yet'})
  }
}

//Manejo de la peticion optener un unico usuario
const getOneUser = (req, res) => {
  const id = req.params.id
  const data = getUserById(id)

  if(data){
    res.status(200).json(data)
  } else{
    res.status(404).json({id: id, message: 'User not found'})
  }
}

//Manejo de la peticion crear un nuevo usuario
const createNewUser = (req, res) => {
  const userInfo = req.body

  if(userInfo){
    const data = createUser(userInfo)
    res.status(201).json(data)
  } else {
    res.status(400).json({message: 'No data found to create new user'})
  }
}

module.exports = { getUsers, getOneUser, createNewUser }