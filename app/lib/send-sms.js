"use server";

import { revalidatePath } from "next/cache";
import { Vonage } from "@vonage/server-sdk";

const vonage = new Vonage({
    apiKey: process.env.VONAGE_API_KEY,
    apiSecret: process.env.VONAGE_API_SECRET,
});

const from = process.env.VONAGE_VIRTUAL_NUMBER;

export async function sendSMS(prevState, formData) {
    try {
        const vonage_response = await vonage.sms.send({
            to: formData.get("number"),
            from,
            text: formData.get("text"),
        });

        revalidatePath("/");
        return {
            response:
                vonage_response.messages[0].status === "0"
                    ? `🎉 Message sent successfully.`
                    : `There was an error sending the SMS. ${
                        // prettier-ignore
                        vonage_response.messages[0].error-text
                    }`,
        };
    } catch (e) {
        return {
            response: `There was an error sending the SMS. The error message: ${e.message}`,
        };
    }
}
