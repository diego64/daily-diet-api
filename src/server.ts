import { app } from './app'
import { env } from './env'

const host = 'RENDER' in process.env ? '0.0.0.0' : 'localhost'

app
  .listen({
    port: env.PORT,
    host,
  })
  .then(() => {
    console.log('API is Running!')
  })
  .catch((err) => {
    console.error('Failed to start the server:', err)
  })
