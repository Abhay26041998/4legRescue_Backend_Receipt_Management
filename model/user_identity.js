const sequelizeDBConfig = require("../config/db.config");

const user_identity = sequelizeDBConfig.sequelize.define(
	"user_identity",
	{
		// id: {
		// 	type: DataTypes.BIGINT,
		// 	primaryKey: true,
		// 	autoIncrement: true,
		// },
		user_id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			allowNull: false,
		},
		first_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		last_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email_id: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		mobile_number: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		profile_image: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		address: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		user_role: {
			type: DataTypes.TINYINT,
			allowNull: false,
			// 1=Member 2=Admin
		},
		user_status: {
			type: DataTypes.TINYINT,
			allowNull: false,
			// 1=Active, 0=InActive
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: DataTypes.NOW,
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: DataTypes.NOW,
		},
	},
	{
		timestamps: true,
		tableName: "user_identity",
		dialect: "mysql",
		logging: console.log,
	}
);

sequelizeDBConfig
	.sync()
	.then(() => {
		console.log("User model has been synchronized with the database.");
	})
	.catch((error) => {
		console.error("Error synchronizing the User model:", error);
	});

module.exports = user_identity;
