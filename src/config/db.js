import { Pool } from 'pg'
import env from 'dotenv'

env.config()

export const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
})

export const verificarConexion = async () => {
  try {
    await pool.connect()
    console.log('[OK] conexion exitosa')
  } catch (error) {
    console.log(error)
  }
}
