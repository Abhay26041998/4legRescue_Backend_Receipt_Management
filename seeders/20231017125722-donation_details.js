"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert("donation_details", [
			{
				donation_date: new Date(),
				donation_amount: "100.00",
				donor_first_name: "Abhi",
				donor_last_name: "Rathod",
				donation_type: 1,
				donor_email_id: "test@gmail.com",
				donor_mobile_number: "+9595959595",
				donor_pan_card_number: "DGPPP7878X",
				donor_address1: "testyufsavhs",
				createdAt: new Date(),
				updatedAt: new Date(),
				payment_mode: 1,
				is_donation_approved: 1,
				donation_collected_by: "81a134a6-70ef-43ef-b192-db72e8c8f9cb",
				approved_by: "81a134a6-70ef-43ef-b192-db72e8c8f9cb",
			},
			// Add more donation data objects here
		]);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
