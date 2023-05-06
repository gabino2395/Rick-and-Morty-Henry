const FavoriteModel = require("../models/Favorite");

let myFavorites = [];

const postFav = async (req, res) => {
  try {
    const character = req.body;
    const characterFound = myFavorites.find((fav) => fav.id === character.id);

    if (characterFound) throw Error("El personaje ya existe en favoritos");

    myFavorites.push(character);
    res.status(200).json(myFavorites);

    const char = await Favorite.create(character);
    const favorites = await FavoriteModel.findAll(char);
    res.status(200).json(favorites);
  } catch (error) {
    return res.status(404).send(error.message);
  }
};

const deleteFav = (req, res) => {
  const { id } = req.params;

  myFavorites = myFavorites.filter((favorite) => favorite.id !== +id);

  return res.status(200).json(myFavorites);
};

module.exports = {
  postFav,
  deleteFav,
};
