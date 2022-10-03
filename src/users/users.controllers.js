const uuid = require('uuid')

// Base de datos ficticia con un usuario de prueba
const userDB = [
  {
    "id": "435bfd62-5e3d-4e97-ae4e-b5c66e4179c6",
    "first_name": "juan",
    "last_name": "perez",
    "email": "algo@gmail.com",
    "password": "contrasenia",
    "birthday": "1999/09/19"
  }
];

//Hace un return de todos los usuarios
const getAllUsers = () => {
  return userDB
}

//Hace un return de un usuario basado en un id determinado
const getUserById = (id) => {
  const data = userDB.find(user => user.id === id)
  return data
}

//Crea un nuevo usuario en la "base de datos"
const createUser = (userInfo) => {
  const newUser = {
    id: uuid.v4(),
    first_name: userInfo.first_name,
    last_name: userInfo.last_name,
    email: userInfo.email,
    password: userInfo.password,
    birthday: userInfo.birthday
  }
  userDB.push(newUser)
  return newUser
}

module.exports = { getAllUsers, getUserById, createUser}