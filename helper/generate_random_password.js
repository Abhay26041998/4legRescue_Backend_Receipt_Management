const generate_random_password = (length) => {
	let password = "";
	const charset =
		"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?";

	for (let index = 0; index < length; index++) {
		const randomIndex = Math.floor(Math.random() * charset.length);

		password += charset[randomIndex];
	}

	return password;
};

module.exports = generate_random_password;
