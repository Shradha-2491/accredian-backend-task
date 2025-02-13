import prisma from "../config/database.js";
import { sendReferralEmail } from "../utils/email.js";

export const createReferral = async (req, res) => {
    const { referrer, referee, referrer_email, referee_email, course } = req.body;
    if (!referrer || !referee || !referrer_email || !referee_email || !course) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const referral = await prisma.referral.create({
            data: { referrer, referee, referrer_email, referee_email, course },
        });
        console.log("Referral: ", referral)

        try {
            await sendReferralEmail(referrer, referee, referee_email, course);
        } catch (emailError) {
            console.error("Email sending failed:", emailError);
            return res.status(500).json({
                success: false,
                error: "Referral saved, but email failed to send. Please check Referee email."
            });
        }

        return res.status(201).json({
            success: true,
            message: "Referral submitted successfully!",
            referral
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "Failed to save referral. Please try again later."
        });
    }
};
