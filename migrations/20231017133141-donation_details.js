"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.createTable(
			"donation_details",
			{
				donation_id: {
					type: Sequelize.BIGINT,
					primaryKey: true,
					autoIncrement: true,
				},
				donation_date: {
					type: Sequelize.DATE,
					defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
				},
				donation_amount: {
					type: Sequelize.STRING,
				},
				donor_first_name: {
					type: Sequelize.STRING,
				},
				donor_middle_name: {
					type: Sequelize.STRING,
				},
				donor_last_name: {
					type: Sequelize.STRING,
				},
				donor_email_id: {
					type: Sequelize.STRING,
				},
				donor_mobile_number: {
					type: Sequelize.STRING,
				},
				donor_pan_card_number: {
					type: Sequelize.STRING,
				},
				donor_address1: {
					type: Sequelize.STRING,
				},
				donor_address2: {
					type: Sequelize.STRING,
				},
				donor_address3: {
					type: Sequelize.STRING,
				},
				city: {
					type: Sequelize.STRING,
				},
				state: {
					type: Sequelize.STRING,
				},
				pincode: {
					type: Sequelize.STRING,
				},
				donation_purpose: {
					type: Sequelize.STRING,
				},
				donation_type: {
					type: Sequelize.TINYINT,
					allowNull: false,
					// 1-Donation, 2-Rescue Fund, 3-Cattle Fee
				},
				payment_mode: {
					type: Sequelize.TINYINT,
					allowNull: false,
					// 1-Online , 2-Cheque,	3-Cash
				},
				bank_name: {
					type: Sequelize.STRING,
				},
				bank_transaction_details: {
					type: Sequelize.STRING,
				},
				cheque_number: {
					type: Sequelize.STRING,
				},
				approved_by: {
					type: Sequelize.STRING,
					// references: {
					// 	model: "user_identity",
					// 	key: "user_id",
					// },
				},
				donation_collected_by: {
					type: Sequelize.STRING,
					// references: {
					// 	model: "user_identity",
					// 	key: "user_id",
					// },
				},
				donation_status_reason: {
					type: Sequelize.STRING,
				},
				is_donation_approved: {
					type: Sequelize.TINYINT,
					defaultValue: 1,
					// 	1 = Pending || 2 = Approved || 3 = Not Approved
				},

				createdAt: {
					type: Sequelize.DATE,
					allowNull: false,
					defaultValue: Sequelize.NOW,
				},
				updatedAt: {
					type: Sequelize.DATE,
					allowNull: false,
					defaultValue: Sequelize.NOW,
				},
			},
			{ logging: console.log }
		);
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.dropTable("donation_details");
	},
};
