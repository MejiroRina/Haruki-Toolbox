import {callApi} from "@/components/users/data/api/call-api"
import {
    EmailInfo,
    APIResponse,
    verifyEmailPayload,
    SendEmailVerificationPayload
} from "@/components/users/data/types";

export async function sendEmailVerificationCode(email: string, challengeToken: string): Promise<APIResponse<null>> {
    const payload: SendEmailVerificationPayload = {email, challengeToken};
    return await callApi<null>(
        "/api/email/send",
        "POST",
        payload
    )
}

export async function verifyEmail(oneTimePassword: string): Promise<APIResponse<EmailInfo>> {
    const payload: verifyEmailPayload = {oneTimePassword}
    return await callApi<EmailInfo>(
        "/api/email/verify",
        "POST",
        payload
    )
}
