const sequelizeDBConfig = require("../config/db.config");
const DataTypes = require("sequelize");

const donation_details = sequelizeDBConfig.sequelize.define(
	"donation_details",
	{
		donation_id: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			autoIncrement: true,
		},
		donation_date: {
			type: DataTypes.DATE,
			defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
		},
		donation_amount: {
			type: DataTypes.STRING,
		},
		donor_first_name: {
			type: DataTypes.STRING,
		},
		donor_middle_name: {
			type: DataTypes.STRING,
		},
		donor_last_name: {
			type: DataTypes.STRING,
		},
		donor_email_id: {
			type: DataTypes.STRING,
		},
		donor_mobile_number: {
			type: DataTypes.STRING,
		},
		donor_pan_card_number: {
			type: DataTypes.STRING,
		},
		donor_address1: {
			type: DataTypes.STRING,
		},
		donor_address2: {
			type: DataTypes.STRING,
		},
		donor_address3: {
			type: DataTypes.STRING,
		},
		city: {
			type: DataTypes.STRING,
		},
		state: {
			type: DataTypes.STRING,
		},
		pincode: {
			type: DataTypes.STRING,
		},
		donation_purpose: {
			type: DataTypes.STRING,
		},
		donation_type: {
			type: DataTypes.TINYINT,
			allowNull: false,
			// 1-Donation, 2-Rescue Fund, 3-Cattle Fee
		},
		payment_mode: {
			type: DataTypes.TINYINT,
			allowNull: false,
			// 1-Online , 2-Cheque,	3-Cash
		},
		bank_name: {
			type: DataTypes.STRING,
		},
		bank_transaction_details: {
			type: DataTypes.STRING,
		},
		cheque_number: {
			type: DataTypes.STRING,
		},
		approved_by: {
			type: DataTypes.STRING,
			// references: {
			// 	model: "user_identity",
			// 	key: "user_id",
			// },
		},
		donation_collected_by: {
			type: DataTypes.STRING,
			// references: {
			// 	model: "user_identity",
			// 	key: "user_id",
			// },
		},
		donation_status_reason: {
			type: DataTypes.STRING,
		},
		is_donation_approved: {
			type: DataTypes.TINYINT,
			defaultValue: 1,
			// 	1 = Pending || 2 = Approved || 3 = Not Approved
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
		dialect: "mysql",
		timestamps: false,
		tableName: "donation_details",
		logging: console.log,
	}
);

sequelizeDBConfig.sequelize
	.sync()
	.then(() => {
		console.log("User model has been synchronized with the database.");
	})
	.catch((error) => {
		console.error("Error synchronizing the User model:", error);
	});

module.exports = donation_details;
