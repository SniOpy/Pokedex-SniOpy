const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./app/views");
const { Pokemon } = require("./app/models/pokemon");



app.get("/", async (req,res) => {
    
    const pokemons = await Pokemon.findAll();
    console.log(pokemons);

    res.render("index", {
        pokemons
    });

});



app.listen(process.env.PORT, () => {
    console.log("Starting to http://localhost:3000")
});
