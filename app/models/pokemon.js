const {DataTypes, Model} = require("sequelize");
const sequelize = require("../database");


class Pokemon extends Model {}

Pokemon.init({

    //! On indique les champs de base de la database
    nom : {
        type: DataTypes .STRING,
        allowNull : false
    },
    pv: {
        type:DataTypes.INTEGER,
        allowNull: false
    },
    attaque: {
        type:DataTypes.INTEGER,
        allowNull: false
    },
    defense: {
        type:DataTypes.INTEGER,
        allowNull: false
    },
    attaque_spe: {
        type:DataTypes.INTEGER,
        allowNull: false
    },
    defense_spe: {
        type:DataTypes.INTEGER,
        allowNull: false
    },
    vitesse: {
        type:DataTypes.INTEGER,
        allowNull: false
    }
}, {
    //? Lien entre notre bdd  et sequelize
    sequelize, 
    tableName : "pokemon"
});

module.exports = Pokemon;