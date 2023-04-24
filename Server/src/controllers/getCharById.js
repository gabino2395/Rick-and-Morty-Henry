const axios = require("axios");

const getCharById = (res, id) => {
  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
      const {
        id,
        name,
        gender,
        species,
        origin,
        image,
        status,
      } = response.data;
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          id,
          name,
          gender,
          species,
          origin, 
          image,
          status,
        })
      );
      // const character = { id, name, gender, species, origin, image, status };
      // res.status(200).json(character);
    })
    .catch((error) => {
      // res.status(500)
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(error.message)
      // .contentType("text/plain").send(error.message);
    });
};

module.exports = {
  getCharById,
};
