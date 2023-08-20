import { NextResponse } from 'next/server'

import { email } from '@/utils/email'
import ContactEmail from '@/emails/Contact'

export async function POST(req: Request) {
    try {
        const body = await req.json()

        email.emails.send({
            from: 'no-reply@titansoftware.dev',
            to: ['slionel1850@gmail.com'],
            subject: 'New Submission: CONTACT FORM',
            react: <ContactEmail {...body} />
        })

        return NextResponse.json({
            status: 200
        })
    } catch(err) {
        return NextResponse.json({
            status: 400
        })
    }
}