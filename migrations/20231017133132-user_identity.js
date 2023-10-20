/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.createTable(
			"user_identity",
			{
				user_id: {
					type: Sequelize.UUID,
					defaultValue: Sequelize.UUIDV4,
					allowNull: false,
				},
				first_name: {
					type: Sequelize.STRING,
					allowNull: false,
				},
				last_name: {
					type: Sequelize.STRING,
					allowNull: false,
				},
				email_id: {
					type: Sequelize.STRING,
					allowNull: false,
					unique: true,
				},
				mobile_number: {
					type: Sequelize.STRING,
					allowNull: false,
				},
				profile_image: {
					type: Sequelize.STRING,
					allowNull: true,
				},
				address: {
					type: Sequelize.STRING,
					allowNull: true,
				},
				password: {
					type: Sequelize.STRING,
					allowNull: false,
				},
				user_role: {
					type: Sequelize.TINYINT,
					allowNull: false,
					// 1=Member 2=Admin
				},
				user_status: {
					type: Sequelize.TINYINT,
					allowNull: false,
					// 1=Active, 0=InActive
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
		return queryInterface.dropTable("user_identity");
	},
};
