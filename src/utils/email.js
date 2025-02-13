import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
    },
});

export const sendReferralEmail = async (referrer, referee, email, course) => {
    const mailOptions = {
        from: `<${process.env.GMAIL_USER}>`,
        to: email,
        subject: `🎉 ${referrer} Referred You for ${course}!`,
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
            <h2 style="color: #333; text-align: center;">🌟 You’ve Been Referred! 🌟</h2>
            <p style="font-size: 16px; color: #555;">
                <strong>${referrer}</strong> has referred you for the <strong>${course}</strong> course.
            </p>
            <p style="font-size: 16px; color: #555;">
                This is an amazing opportunity to learn and grow. Don’t miss out!
            </p>
            <div style="text-align: center; margin: 20px 0;">
                <a href="https://accredian.com/" style="background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; font-size: 18px; border-radius: 5px;">
                    Enroll Now
                </a>
            </div>
            <p style="font-size: 14px; color: #888; text-align: center;">
                If you have any questions, reply to this email.
            </p>
        </div>
        `,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent:", info.response);
    } catch (error) {
        console.error("Email sending failed:", error);
        throw new Error("Failed to send referral email. Check SMTP credentials.");
    }
};
