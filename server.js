const express = require("express");
const cors = require("cors");
const sequelizeDBConfig = require("./config/db.config");


// Server configuration
const app = express();

// defualt route
app.get("/", (req, res) => {
	res.json({ message: "Welcome to 4leg rescue" })
}
)


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
