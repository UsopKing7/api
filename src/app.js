import { app } from './server.js'
import { PORT } from './config/env.js'
import { verificarConexion } from './config/db.js'

verificarConexion()

app.listen(PORT, () => {
  console.table({
    URL: `http://localhost:${PORT}`
  })
})
