export default function ContactEmail({ name, email, phone }: { name: string, email: string, phone: string }) {
    return (
        <div className='m-auto w-[400px] border-solid flex flex-col p-6 gap-6 bg-background'>
            <div className='flex flex-col justify-start'>
                <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>Regiment</h1>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col w-full space-y-1.5'>
                    Test
                </div>
            </div>
        </div>
    )
}