const jwt = require("jsonwebtoken");

const JWTSign = (user, options = { expiresIn: "24h" }) => {
	const payload = {
		user_id: user.user_id,
		username: user.username,
		// email: user.email,
		email_id: user.email_id,
		user_role: user.user_role,
	};

	let secret = process.env.APP_SECRET;

	let signOptions = {
		...options,
	};

	return jwt.sign(payload, secret, signOptions);
};

module.exports = {
	JWTSign,
};
