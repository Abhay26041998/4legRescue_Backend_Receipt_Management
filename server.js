const express = require("express");
const cors = require("cors");
const sequelizeDBConfig = require("./config/db.config");
const user_routes = require("./routes/user_routes");

// Server configuration
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("helper"));
// defualt route
app.get("/v1", (req, res) => {
	res.json({ message: "Welcome to 4leg rescue" });
});

// Calling a routes
app.use("/v1/user", user_routes);

// set port, listen for requests
const PORT = process.env.PORT || 4000;
sequelizeDBConfig.sequelize
	.sync()
	.then((result) => {
		console.log(`Server is running on http://localhost:${PORT}`);
		app.listen(PORT);
	})
	.catch((err) => {
		console.log(err);
	});
