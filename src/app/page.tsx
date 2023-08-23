import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

import { authOptions } from '@/utils/auth'
import ContactModal from '@/components/modals/ContactModal'
import RedirectButton from '@/components/nav/RedirectButton'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'

export default async function HomePage() {
    const session = await getServerSession(authOptions)

    if(session) redirect('/dashboard')

    return (
        <div className='h-screen flex flex-col justify-center items-center px-4'>
            <Card className='w-full px:4 border-none max-w-xl relative shadow'>
                <div className='absolute top-4 right-4'>
                    <RedirectButton to='/auth/login'>Login</RedirectButton>
                </div>
                <CardHeader>
                    <CardTitle className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>Regiment</CardTitle>
                    <CardDescription>Personal Training</CardDescription>
                </CardHeader>
                <CardContent className='flex flex-col gap-4'>
                    <p>Are you looking to get in shape? Looking to improve your fitness level? If you answered yes to either of these questions, you{'\''}ve come to the right place!</p>
                    <p>At Regiment, we offer personal training services that can help you achieve your fitness goals. We have a team of experienced and certified trainers who are ready to work with you to help you reach your potential.</p>
                    <p>If you{'\''}re ready to get started on your fitness journey, contact us today!</p>
                </CardContent>
                <CardFooter>
                    <div className='w-full flex justify-end gap-4'>
                        <ContactModal />
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}