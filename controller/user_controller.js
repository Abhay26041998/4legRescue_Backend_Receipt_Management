const express = require("express");
const router = express.Router();
const { validationResult, check } = require("express-validator");
const bcrypt = require("bcrypt");
const user_identity = require("../model/user_identity");
const generate_random_password = require("../helper/generate_random_password");
const { welcome_email } = require("../helper/welcome_email");
const { JWTSign } = require("../helper/jwt_token");
const { addUserToGoogleSheet } = require("../helper/addUserToGoogleSheet");

// Reistrations
exports.register_user = async (req, res) => {
	const {
		first_name,
		last_name,
		email_id,
		// password,
		profile_image,
		address,
		user_role,
		user_status,
		mobile_number,
	} = req.body;

	try {
		let password = generate_random_password(12);
		const hashedPassword = await bcrypt.hash(password, 10);

		console.log("hashedPassword", hashedPassword, password);
		// check email is already register or not
		const emailMatch = await user_identity.findOne({
			where: { email_id: email_id },
		});

		if (emailMatch) {
			res.status(201).json({ message: "Email already registered" });
		} else {
			const newUser = await user_identity.create({
				first_name,
				last_name,
				email_id,
				password: hashedPassword,
				profile_image,
				address,
				user_role,
				user_status,
				mobile_number,
			});
			// sent Welcome Email
			welcome_email(email_id, password);
			// jwt token generator
			//jwt token generate
			const token = JWTSign({
				user_id: newUser.user_id,
				username: newUser.first_name,
				email_id: newUser.email_id,
				user_role: newUser.user_role,
			});

			const spreadsheetId = "1ZMIg5wxD4eR2RGFxKGexYdefs-WHowzvgdHMY5fzFZ8";
			addUserToGoogleSheet(token, spreadsheetId)
				.then((result) => {
					console.log(result);
				})
				.catch((error) => {
					console.error(error);
				});
			res.status(201).json({
				message: "User registered successfully",
				user: newUser,
				token,
			});
		}
	} catch (error) {
		console.error("Error registering user:", error);
		res.status(500).json({ error: "Server error" });
	}
};
