 //! On exporte nos 2 class dans notr fichier index
const { Pokemon} = require("./pokemon");
const { Type } = require("./type");

//* On crée les différentes associations en fonction des cardinalités

Pokemon.belongsToMany(Type, {
    through: 'pokemon_has_type',
    foreignKey : 'pokemon_id',
    otherKey: 'type_id',
    as : 'types'
});

Type.belongsToMany(Pokemon, {
    through: 'pokemon_has_type',
    foreignKeyt: 'type_id',
    otherKey: 'pokemon_id',
    as: 'pokemons'
});


module.exports = {
    Pokemon,
    Type,
}



