const nodemailer = require("nodemailer");
require("dotenv").config();
exports.welcome_email = async (recipient_email, password) => {
	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.MAIL_USERNAME,
			pass: process.env.MAIL_PASSWORD,
		},
	});

	const mailOptions = {
		from: process.env.MAIL_USERNAME,
		to: recipient_email,
		subject: "4Leg Resuce: Welcome Member.",
		// text: "This is the text content of the email.",
		html: `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lobster+Two:ital,wght@0,400;0,700;1,400;1,700&family=Poppins:ital,wght@0,100;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Quicksand:wght@500;600;700&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">   <title>Welcome to Our Animal Rescue Team</title>
        <style>
            body {
                background-color: #fff !important;
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                border: 20px solid #13a1c0 !important;
            }
            .container {
                max-width: 600px!important;
                margin: 0 auto !important;
                padding: 20px !important;
                background-color: #13a1c0 !important;
                border-radius: 0px !important;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1) !important;
                font-family: "Quicksand", Sans-serif !important;
            }
            h1 {
                color: #fff;
                font-family: "Lobster Two", Sans-serif !important;
                text-align: center !important;
            }
            img {
                display: block !important;
                margin: 0 auto !important;
            }
            p {
                font-size: 16px !important;
                color: #fff !important;
            }
            a {
                color: #fff !important;
                text-decoration: none !important;
            }
            a:hover {
                text-decoration: underline !important;
            }
            header-image:{
              background-color: #fff !important;
            }
        </style>
    </head>
    <body>
              <div class="header-image">  <img src="https://4legrescue.com/wp-content/uploads/elementor/thumbs/4leg-Rescue-oxx7l7znqg1vo6s23wo042skztv3tt4t4e1bknl9ye.png" alt="Cow" width="150" height="auto"></div>
    
        <div class="container">
    
            <h1>Welcome to 4Leg Rescue Family</h1>
            <p>Dear [Member's Name],</p>
            <p>We are excited to welcome you to our Animal Rescue Team! Thank you for joining our mission to protect and care for animals in need.</p>
                    <p  style="font-weight:bold;">Your login credentials</p>
                    <p>
                       <span style="font-weight:bold;">Email: &nbsp;</span><span style="font-weight:lighter;" class="">${recipient_email}</span> 
         <br>
          <span style="font-weight:bold;">Password: &nbsp;</span><span style="font-weight:lighter;" class="">${password}</span>
                    </p>
    
      <a style="background-color:#fff;border-radius:4px;color:#13a1c0;display:inline-block;font-family:Helvetica, Arial, sans-serif;font-size:18px;font-weight:normal;line-height:50px;text-align:center;text-decoration:none;width:100%;-webkit-text-size-adjust:none;" href="http://donation-management.4legrescue.com/">Visit Account </a>
              <p>**The password was automatically generated; please feel free to modify it as needed.</p>
    
            <p>Your support and dedication are greatly appreciated, and we look forward to working together to make a difference in the lives of animals.</p>
            <!--<p>If you have any questions or need assistance, feel free to reach out to our team. Together, we can achieve great things for our furry friends.</p>-->
            <!--<p>Stay connected with us and get the latest updates by following us on <a href="https://www.facebook.com/youranimalrescue" target="_blank">Facebook</a>, <a href="https://twitter.com/youranimalrescue" target="_blank">Twitter</a>, and <a href="https://www.instagram.com/youranimalrescue" target="_blank">Instagram</a>.</p>-->
            <p>Thank you once again for joining our cause. Together, we can make the world a better place for animals.</p>
            <!--<p>Warm regards,</p>-->
            <!--<p>4Leg Rescue</p>-->
        </div>
    </body>
    </html>    
    `, // Uncomment for HTML emails
	};

	// Send the email
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.error("Error sending email: " + error);
		} else {
			console.log("Email sent: " + info.response);
		}
	});
};
