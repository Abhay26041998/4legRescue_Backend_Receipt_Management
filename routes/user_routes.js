// itemsRoute.js

const express = require("express");
const { register_user } = require("../controller/user_controller");
const {
	registration_validation,
	validate_registration,
} = require("../validations/user_validation");
const router = express.Router();

router.post(
	"/login",
	registration_validation,
	validate_registration,
	register_user
);

// Read all items
// router.get("/items", (req, res) => {
// 	// Implement the logic to retrieve and return a list of items
// 	res.send("Get all items");
// });

// // Read a single item by ID
// router.get("/items/:id", (req, res) => {
// 	// Implement the logic to retrieve and return a specific item
// 	const itemId = req.params.id;
// 	res.send(`Get item with ID ${itemId}`);
// });

// // Update an item by ID
// router.put("/items/:id", (req, res) => {
// 	// Implement the logic to update a specific item
// 	const itemId = req.params.id;
// 	// You can access updated data using req.body
// 	res.send(`Update item with ID ${itemId}`);
// });

// // Delete an item by ID
// router.delete("/items/:id", (req, res) => {
// 	// Implement the logic to delete a specific item
// 	const itemId = req.params.id;
// 	res.send(`Delete item with ID ${itemId}`);
// });

module.exports = router;
