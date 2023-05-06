// const URL = "https://rickandmortyapi.com/api/character";
// const axios = require("axios");

// const getCharById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { data } = await axios(`${URL}/${id}`);

//     if (!data.name) throw Error(`Faltan datos del personaje con ID: ${id}`);

//     const character = {
//       id: data.id,
//       name: data.name,
//       species: data.species,
//       origin: data.origin,
//       image: data.image,
//       gender: data.gender,
//       status: data.status,
//     };
//     return res.status(200).json(character);
//   } catch (error) {
//     return error.message.includes("ID")
//       ? res.status(404).send(error.message)
//       : res.status(500).send(error.response.data.error);
//   }
// };

// module.exports = {
//   getCharById,
// };



const axios = require('axios');

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async(request,response) =>{
    let character = {};
try{
    const id = request.params.id
    const {data} = await axios(`${URL}${id}`)
    if(!data.name) throw new Error("Not found")
    character = {
        id : data.id,
        status : data.status,
        name: data.name,
        species: data.species,
        origin: data.origin,
        image: data.image,
        gender: data.gender
    }
    return response.status(200).json(character)

}catch(error){
    error.message.includes("Not found")
    ? response.status(404).send(error.message)
    : response.status(500).send(error.message)}
}

module.exports = {
    getCharById
}