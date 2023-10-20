const { check, validationResult, body } = require("express-validator");

const registration_validation = [
	body("first_name").notEmpty().withMessage("First name is required"),
	body("last_name").notEmpty().withMessage("Last name is required"),
	body("email_id").isEmail().withMessage("Invalid email format"),
	// check("password")
	// 	.isLength({ min: 6 })
	// 	.withMessage("Password must be at least 6 characters"),
	body("mobile_number").isMobilePhone().withMessage("Invalid mobile number"),
	// check("user_role").isIn([1, 2]).withMessage("Invalid user role"),
	// check("user_status").isIn([0, 1]).withMessage("Invalid user status"),
];

const validate_registration = (req, res, next) => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	next();
};

module.exports = { registration_validation, validate_registration };
