import { pool } from '../config/db.js'

export const userModel = {
  getUser: async () => {
    const user = pool.query('SELECT * FROM usuarios')
    if (!user) throw new Error ('No existen usuarios ne la base de datos')

    return user
  },

  postUser: async ( username, password ) => {
    const userExiste = pool.query('SELECT * FROM usuarios WHERE username = $1 ', [username])
    if ((await userExiste).rows.length > 0) throw new Error ('El usuario ya existe')

    const newUser = pool.query('INSERT INTO usuarios (username, password) VALUES ($1, $2) RETURNING * ', [username, password])

    return newUser
  },
  updateUser: async ( username, password, id ) => {
    const userExiste = pool.query('SELECT * FROM usuarios WHERE username = $1 ', [username])
    if (!userExiste) throw new Error ('el usuario no existe')
    
    const updateUser = pool.query('UPDATE usuarios SET username = $1, password = $2 WHERE id = $3', [username, password, id])

    return updateUser
  }
}
