const { google } = require("googleapis");
const sheets = google.sheets("v4");
const google_json = require("../helper/client_secret_224250377733-e2pgj1fas8d040jbhq6gtvqo760mq827.apps.googleusercontent.com.json");

const auth = new google.auth.GoogleAuth({
	keyFile: `helper/client_secret_224250377733-e2pgj1fas8d040jbhq6gtvqo760mq827.apps.googleusercontent.com.json`,
	scopes: "https://www.googleapis.com/auth/spreadsheets",
});

const addUserToGoogleSheet = async (userData, spreadsheetId) => {
	const sheetsApi = await sheets.spreadsheets.values;

	const range = "Sheet1!A2"; // Assuming you start adding users from cell A2

	const valueInputOption = "RAW";

	const values = [
		[
			userData.firstName,
			userData.lastName,
			userData.email,
			// Add more user data as needed
		],
	];

	const resource = {
		values,
	};

	try {
		const sheetsResponse = await sheetsApi.update({
			auth,
			spreadsheetId,
			range,
			valueInputOption,
			resource,
		});

		return `User added to Google Sheets: ${sheetsResponse.data.updatedCells} cells updated`;
	} catch (error) {
		return `Error adding user to Google Sheets: ${error.message}`;
	}
};

module.exports = {
	addUserToGoogleSheet,
};
