import { Account } from '@prisma/client'
import { DefaultSession } from 'next-auth'

declare module 'next-auth' {
    interface Session extends DefaultSession {
        user: Account
    }
}