const server = require("./app");
const PORT = 3001;
const { conn } = require("./DB_connection");
server.listen(PORT, async () => {
  console.log("server listen on port: " + PORT);
  console.log('::::',conn.models)
  await conn.sync({ force: true }); // sincroniza todos los models, todas las tablas

});
