//* On importe dotenv afin d'utiliser le .env
require("dotenv").config();
const {Sequelize} = require("sequelize");

//* On crée une instance de Sequelize afin de se connecter à la BDD
const sequelize = new Sequelize(process.env.PG_URL, {

    define: {
        timestamps : true,
        createdAt : "create_at",
        updatedAt : "update_at",
        underscored : true,
    }
});

async function testConnection () {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully !");
    } catch (error) {
        console.log("Unable to connect to the Bdd",error);
    }
}
testConnection();


module.exports = sequelize;


