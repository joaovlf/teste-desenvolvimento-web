const PokedexData = require('../model/PokemonData')



const Register = async(req,res)=>{
    PokedexData.create({
        id:req.body.id,
        Name:req.body.Name,
        PokedexNumber:req.body.PokedexNumber,
        Imgname:req.body.Imgname,
        Generation:req.body.Generation,
        EvolutionStage:req.body.EvolutionStage,
        Evolved:req.body.Evolved,
        FamilyID:req.body.FamilyID,
        CrossGen:req.body.CrossGen,
        Type1:req.body.Type1,
        Type2:req.body.Type2,
        Weather1:req.body.Weather1,
        Weather2:req.body.Weather2,
        STATTOTAL:req.body.STATTOTAL,
        ATK:req.body.ATK,
        DEF:req.body.DEF,
        STA:req.body.STA,
        Legendary:req.body.Legendary,
        Aquireable:req.body.Aquireable,
        Spawns:req.body.Spawns,
        Regional:req.body.Regional,
        Raidable:req.body.Raidable,
        Hatchable:req.body.Hatchable,
        Shiny:req.body.Shiny,
        Nest:req.body.Nest,
        New:req.body.New,
        NotGettable:req.body.NotGettable,
        FutureEvolve:req.body.FutureEvolve,
        CP100_40:req.body.CP100_40,
        CP100_39:req.body.CP100_39     
})
await res.redirect('/')

}

module.exports = Register