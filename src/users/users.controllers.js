const uuid = require('uuid')

const userDB = [];

const getAllUsers = () => {
  return userDB
}

const getUserById = (id) => {
  const data = userDB.find(user => user.id === id)
  return data
}

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