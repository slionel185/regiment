import bcrypt from 'bcrypt'
import { NextResponse } from 'next/server'

import { prisma } from '@/utils/prisma'

export async function POST(req: Request) {
    const body: { email: string, username: string, password: string, confirmPassword: string } = await req.json()

    const exists = await prisma.account.findUnique({
        where: {
            email: body.email
        }
    })

    if(exists) return NextResponse.json({
        status: 400,
        message: 'That user already exists.'
    })

    const hash = await bcrypt.hash(body.password, 10)

    const newUser = await prisma.account.create({
        data: {
            email: body.email,
            username: body.username,
            password: hash
        }
    })

    return NextResponse.json({ status: 201, message: 'User created.', body: newUser })
}