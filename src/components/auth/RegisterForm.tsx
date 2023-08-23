'use client'

import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'

import { RegisterFormSchema, RegisterFormType } from '@/types/auth/RegisterForm'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form'

export default function RegisterForm() {
    const router = useRouter()
    const form = useForm<RegisterFormType>({ resolver: zodResolver(RegisterFormSchema) })

    async function onSubmit(values: RegisterFormType) {
        const res = await fetch('/api/account/register', {
            method: 'POST',
            body: JSON.stringify(values)
        }).then(res => res.json())

        if(res.status === 201) router.push('/auth/login')
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-2'>
                <FormField name='email' control={form.control} render={({ field }) => (
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input className='w-full' placeholder='Email' {...field} />
                        </FormControl>
                    </FormItem>
                )} />

                <FormField name='username' control={form.control} render={({ field }) => (
                    <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                            <Input className='w-full' placeholder='Username' {...field} />
                        </FormControl>
                    </FormItem>
                )} />

                <FormField name='password' control={form.control} render={({ field }) => (
                    <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                            <Input className='w-full' type='password' placeholder='Password' {...field} />
                        </FormControl>
                    </FormItem>
                )} />

                <FormField name='confirmPassword' control={form.control} render={({ field }) => (
                    <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                            <Input className='w-full' type='password' placeholder='Confirm Password' {...field} />
                        </FormControl>
                    </FormItem>
                )} />

                <FormDescription>Already have an account? <Link href={'/auth/login'} className='underline'>Login here!</Link></FormDescription>
            
                <Button className='w-full mt-4' type='submit'>Register</Button>
            </form>
        </Form>
    )
}