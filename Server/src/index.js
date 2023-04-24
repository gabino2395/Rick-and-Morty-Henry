const http = require("http");
const { getCharById } = require("./controllers/getCharById");
const PORT = 3001;
const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  if (req.url.includes("/rickandmorty/character")) {
    const id = req.url.split("/").pop();
    const newId = +id;
    const newId2 = Number(id);

    getCharById(res, id);
    // getCharById(res, newId2);

  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});
server.listen(PORT, "localhost", () => {
  console.log(`server running on port ${PORT}`);
});
