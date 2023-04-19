const http = require("http");
const data = require("./utils/data");
const PORT = 3001;
const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  if (req.url.includes("/rickandmorty/character")) {
    const id = req.url.split("/").at(-1);
    const nuevoId=Number(id)
    const character = data.find((char) => char.id === nuevoId);

    // res.end(`Estoy en la ruta con el id : ${id}`);

    if (character) {
      res.writeHead(200, {"Content-Type": "application/json"});
     return res.end(JSON.stringify(character));
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
     return res.end(JSON.stringify({ message: "Character not found" })); 
    }
  }
});
server.listen(PORT, "localhost", () => {
  console.log(`server running on port ${PORT}`);
});
