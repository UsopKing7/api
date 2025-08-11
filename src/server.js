import express from 'express'
import { router  } from './routers/usuarios.routes.js'

export const app = express()
app.use(express.json())

app.use('/api', router)
