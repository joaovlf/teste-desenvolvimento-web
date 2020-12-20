const PokedexData = require('../model/PokemonData')

//search
const infoPokemon = (req,res)=>{
    PokedexData.findOne({

            where: {id:req.params.id}
      }).then((data)=>{
          res.json(data)
      }).catch(e=>{
          res.status(404)
      })            
}
//delete
const DeleteInfo = (req,res)=>{
    PokedexData.destroy({
        where:{id:req.params.id}
  }).then(()=>{
      res.redirect("/")
  }).catch(e=>{
      res.status(404)
  })            
}




module.exports = infoPokemon,DeleteInfo