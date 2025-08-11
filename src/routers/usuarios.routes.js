import { usuarios, createUser, updateUser } from '../controllers/user.controller.js'
import { Router } from 'express'

export const router = Router()

router.get('/usuarios', usuarios) // para mostrar todos los usuarios
router.post('/crear/usuario', createUser) // para insertar usuarios


router.patch('/actualizar/usuario/:id', updateUser) // para actualizar un usuario
router.delete('/eliminar/usuario/:id') // para eliminar un usuario 
