const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const path = require("path");
const fs = require("fs");

dotenv.config();


const name = "Devanshi";
const semester = "7th Semester";
const branch = "B.Tech CSE";
const rollNumber = "230180101016";


const imagePath = path.join(__dirname, "attachment.jpg");


if (!fs.existsSync(imagePath)) {
    console.log("Image attachment not found!");
    process.exit();
}


const allowedExtensions = [".png", ".jpg", ".jpeg"];
const extension = path.extname(imagePath).toLowerCase();

if (!allowedExtensions.includes(extension)) {
    console.log("Only PNG, JPG and JPEG images are allowed!");
    process.exit();
}

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: "Challenge 3 Completed",
    text: `
Name: ${name}
Semester: ${semester}
Branch: ${branch}
Roll Number: ${rollNumber}

Please find the attached image.
    `,
    attachments: [
        {
            filename: path.basename(imagePath),
            path: imagePath
        }
    ]
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log("Error sending email:", error.message);
    } else {
        console.log("Email sent successfully!");
        console.log("Message:", info.response);
    }
});































