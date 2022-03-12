require('dotenv').config();

const Hapi = require('@hapi/hapi');
const routes = require('./src/book.routes');

(async () => {
  const server = Hapi.server({
    port: process.env.APP_PORT,
    host: process.env.APP_HOST,
    routes: {
      cors: true,
    },
  });

  server.route(routes);

  await server.start();

  console.log(`${process.env.APP_NAME} running on %s`, server.info.uri);
})();
