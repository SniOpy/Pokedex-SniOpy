const {DataTypes, Model} = require("sequelize");
const sequelize = require("../database");


 //! On fait hériter notre class Type à la class Model
 
class Type extends Model  {};

Type.init({

    //* On définit les différents champsde base de la table 
    name : {
        type:DataTypes.TEXT,
        allowNull : false
    },
    color : {
        type: DataTypes.STRING,
        allowNull:false
    }

}, {

    //* On crée le lien entre sequelize et la table 'type'
    sequelize, 
    tableName : "type"
});