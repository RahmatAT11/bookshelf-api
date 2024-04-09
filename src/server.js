const Hapi = require('@hapi/hapi')
const routes = require('./routes')

const port = 9000
const host = process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0'
const cors = {
  origin: ['*']
}

const init = async () => {
  const server = Hapi.server({
    port,
    host,
    routes: {
      cors
    }
  })

  server.route(routes)

  await server.start()
  console.log(`Server berjalan pada ${server.info.uri}`)
}

init()
