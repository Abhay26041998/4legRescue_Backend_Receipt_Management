const Sequelize = require("sequelize");
const db = {};
const sequelize = new Sequelize(
	"donation_management_Local",
	"root",
	"admin@123",
	// process.env.PORT,
	{
		host: "localhost",
		port: "3306",
		logging: false,
		dialect: "mysql",
	}
);
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

// const Sequelize = require("sequelize");

// const sequelize = new Sequelize(
// 	"donation_management_Local",
// 	"root",
// 	"admin@123",
// 	{
// 		host: "localhost",
// 		port: "3306",
// 		logging: false,
// 		dialect: "mysql", // Include the dialect here
// 	}
// );

// module.exports = sequelize;
