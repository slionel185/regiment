import type { AuthOptions } from 'next-auth'
import type { Account } from '@prisma/client'

import bcrpyt from 'bcrypt'

import CredentialsProvider from 'next-auth/providers/credentials'
import { prisma } from './prisma'

export const authOptions: AuthOptions = {
    pages: {
        signIn: '/auth/login'
    },
    providers: [
        CredentialsProvider({
            id: 'Titan-Credentials',
            name: 'Titan-Credentials',
            credentials: {
                username: { type: 'text' },
                password: { type: 'password' }
            },
            async authorize(credentials, req) {
                if(!credentials?.username || !credentials?.password) return null

                const user = await prisma.account.findUnique({
                    where: {
                        username: credentials.username
                    }
                })
                if(!user) return null

                const passwordMatch = await bcrpyt.compare(credentials.password, user.password)

                if(passwordMatch) return user
                return null
            },
        })
    ]
}