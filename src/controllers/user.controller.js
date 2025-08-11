import { userModel } from '../models/user.models.js'

export const usuarios = async (req, res) => {
  try {
    const usuarios = await userModel.getUser()

    return res.status(200).json({
      message: 'usurios encontrados en la base de datos',
      usuarios: usuarios.rows
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Algo salio mal'
    })
  }
}

export const createUser = async (req, res) => {
  try {
    const { username, password } = req.body

    const newUser = await userModel.postUser(username, password)

    res.status(201).json({
      message: 'Usuario creado correctamente',
      usuario: newUser
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: 'Algo salio mal'
    })
  }
}

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params
    const { username, password } = req.body
    if (!username || !password) {
      return res.status(400).json({
        message: 'Datos a actualizar no encontrados'
      })
    }

    const updateUser = await userModel.updateUser(username, password, id)

    return res.status(200).json({
      message: 'Usuario actualizado',
      update: updateUser.rows
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: 'Algo salio mal'
    })
  }
}