import { getServerSession } from 'next-auth'

import { authOptions } from '@/utils/auth'

export default async function DashboardPage() {
    const session = await getServerSession(authOptions)
    console.log(session)

    return (
        <div className='flex flex-col h-full justify-center items-center'>
            <div className='flex flex-col'>
                <h1 className='text-primary text-3xl lg:text-5xl font-bold'>Welcome<span className='text-foreground'>,</span></h1>
                <p>{session?.user.username}</p>
            </div>
        </div>
    )
}