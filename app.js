const express = require('express');
const app = express()
const listPokemon = require('./Controller/Database');
const Register = require('./Controller/Create');
const bodyParser = require('body-parser');
const infoPokemon = require('./Controller/InfoPokemon');
const DeleteInfo = require('./Controller/infoPokemon')
//midleware 
app.use(bodyParser.json())


//routes
app.get("/",listPokemon)
app.post("/",Register)


app.get("/search/:id",infoPokemon)
app.delete("/seach:id",DeleteInfo)

        
        
//seerver listening
app.listen(8080,()=>{
    console.log('rodando na porta 8080')
})




