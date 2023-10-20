/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert("user_identity", [
			{
				first_name: "Abhi",
				last_name: "Rathod",
				email_id: "abhi@gmail.com",
				mobile_number: "9586822266",
				user_id: "81a134a6-70ef-43ef-b192-db72e8c8f9cb",
				password: "123456789",
				user_role: 1,
				user_status: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
				profile_image: null,
				address: null,
			},
			// Add more user data objects here
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
