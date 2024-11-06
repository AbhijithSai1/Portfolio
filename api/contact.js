require("dotenv").config();
const nodemailer = require("nodemailer");

// Export an async function to handle the request
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { firstName, lastName, email, phone, message } = req.body;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res
        .status(400)
        .json({ status: "ERROR", message: "Invalid email address" });
    }

    if (!phone || !/^\d{10}$/.test(phone)) {
      return res
        .status(400)
        .json({ status: "ERROR", message: "Invalid 10-digit phone number" });
    }

    const mail = {
      from: `${firstName} ${lastName} <${email}>`,
      to: process.env.EMAIL_USER,
      subject: "Contact Form Submission - Portfolio",
      html: `
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    try {
      await transporter.sendMail(mail);
      return res.status(200).json({ status: "Message Sent" });
    } catch (error) {
      console.error("Error sending email:", error);
      console.log("EMAIL_USER:", process.env.EMAIL_USER);
      console.log("EMAIL_PASS:", process.env.EMAIL_PASS);

      return res
        .status(500)
        .json({ status: "ERROR", message: "Failed to send email" });
    }
  } else {
    res.status(405).json({ message: "Only POST requests allowed" });
  }
}
