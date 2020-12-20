const { request } = require('express');
const nodexlsx = require('node-xlsx');
const filepath = "Pokemon-go.xlsx"
let pokemonTable = nodexlsx.parse(filepath)
let tableRows =  pokemonTable[0]["data"]
const PokedexData = require('../model/PokemonData')


const createDatabase = async()=>{
    for(let i = 0; i < tableRows[1].length;i++){
        if(tableRows[i][1]=="Name"){continue}
    
            await PokedexData.create({
            id:parseInt(i),
            Name:tableRows[i][1],
            PokedexNumber:parseInt(tableRows[i][2]),
            Imgname:tableRows[i][3],
            Generation:parseInt(tableRows[i][4]),
            EvolutionStage:tableRows[i][5],
            Evolved:tableRows[i][6],
            FamilyID:tableRows[i][7],
            CrossGen:tableRows[i][8],	
            Type1:tableRows[i][9],
            Type2:tableRows[i][10],
            Weather1:tableRows[i][11],
            Weather2:tableRows[i][12],
            STATTOTAL:tableRows[i][13],
            ATK:tableRows[i][14],
            DEF:tableRows[i][15],
            STA:tableRows[i][16],
            Legendary:tableRows[i][17],
            Aquireable:tableRows[i][18],
            Spawns:tableRows[i][19],
            Regional:tableRows[i][20],
            Raidable:tableRows[i][21],
            Hatchable:tableRows[i][22],
            Shiny:tableRows[i][23],
            Nest:tableRows[i][24],
            New:tableRows[i][25],
            NotGettable:tableRows[i][26],
            FutureEvolve:tableRows[i][27],
            CP100_40:tableRows[i][28],
            CP100_39:tableRows[i][29]        
        })    
    }
}
//createDatabase()
    
function listPokemon(req, res) {
    PokedexData.findAll().then((data) => { 
            res.json(data)
          })   
}


    


module.exports = listPokemon