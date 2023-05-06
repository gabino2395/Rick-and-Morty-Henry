const {Favorite} = require('../DB_connection');

const postFav = async (req,res) => {
    const {id, name,status,species,gender,image} = req.body;

    try{
        if(!name 
          // || !status 
          // || !species
          //  || !gender
          //   || !image
            ){
          console.log('te faltan datos para agregar a favoritos')

            return res.status(400).json({error: "Faltan datos"});
        };
        const [character, created] = await Favorite.findOrCreate({
            where :{id : id},
            defaults : {
                name,
                // origin,
                status,
                species,
                gender,
                image
            }
        })
        if(!created){
          console.log('tienes un erro aqui')
            return res.status(400).json({error : "el favorito ya estaba agregado"})
        }
        
        const characters = await Favorite.findAll();
        
        return res.status(200).json(characters);

    }catch(error){
        return res.status(500).json({error : error.message})
    }
}

module.exports = {
    postFav
}