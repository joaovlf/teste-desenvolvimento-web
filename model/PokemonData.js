const Sequelize =  require('sequelize')
const db = require('../Database/index')
const PokedexData= db.define('pokemonData',{
    id:{
        
        type:Sequelize.INTEGER,
        primaryKey:true,
        
    },
    Name:{
        type:Sequelize.STRING,
        
    },
    PokedexNumber:{
        type:Sequelize.INTEGER,
        
        
    },
    	Imgname:{
            type:Sequelize.INTEGER,
        

        },
	Generation:{
        type:Sequelize.INTEGER,
        

    },
	EvolutionStage:{
        type:Sequelize.INTEGER,
        

    },
    Evolved:{
        type:Sequelize.INTEGER,
        

    },
    FamilyID:{
        type:Sequelize.INTEGER,
        


    },
    CrossGen:{
        type:Sequelize.INTEGER,
        

    },
    Type1:{
        type:Sequelize.STRING,
        

    },
    Type2:{
        type:Sequelize.STRING,
        

    },
	Weather1:{
        type:Sequelize.STRING,
        

    },
    Weather2:{
        type:Sequelize.STRING,
        

    },
    STATTOTAL:{
        type:Sequelize.INTEGER,
        

    },
    ATK:{
        type:Sequelize.INTEGER,
        
      
    },
    DEF:{
        type:Sequelize.INTEGER,
      

    },
	STA:{
        type:Sequelize.INTEGER,
      

    },
    Legendary:{
        type:Sequelize.INTEGER,
      


    },
    Aquireable:{
        type:Sequelize.INTEGER,


    },
    Spawns:{
        type:Sequelize.INTEGER,


    },
    Regional:{
        type:Sequelize.INTEGER,


    },
        
    Raidable:{
        type:Sequelize.INTEGER,


    },
    Hatchable:{
        type:Sequelize.INTEGER,


    },
        
    Shiny:{
        type:Sequelize.INTEGER,

        
    },
    Nest:{
        type:Sequelize.INTEGER,


    },
        
    New:{
        type:Sequelize.INTEGER,



    },
    NotGettable:{
        type:Sequelize.INTEGER,


    },
    FutureEvolve:{
        type:Sequelize.INTEGER,

   
    },
    CP100_40:{
        type:Sequelize.INTEGER,


    },
    CP100_39:{
        type:Sequelize.INTEGER,
  

    }
});

//db.sync({force:true})


module.exports = PokedexData