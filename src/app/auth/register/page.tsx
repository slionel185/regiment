import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

import { authOptions } from '@/utils/auth'
import RegisterForm from '@/components/auth/RegisterForm'
import RedirectButton from '@/components/nav/RedirectButton'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default async function RegisterPage() {
    const session = await getServerSession(authOptions)

    if(session) return redirect('/dashboard')

    return (
        <div className='flex flex-col min-h-screen justify-center items-center px-4'>
            <Card className='w-full border-none sm:border-solid sm:w-[400px] relative shadow'>
                <div className='absolute top-4 right-4'>
                    <RedirectButton size={'sm'} to='/'>Home</RedirectButton>
                </div>
                <CardHeader className='pb-2'>
                    <CardTitle className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>Register</CardTitle>
                </CardHeader>
                <CardContent>
                    <RegisterForm />
                </CardContent>
            </Card>
        </div>
    )
}