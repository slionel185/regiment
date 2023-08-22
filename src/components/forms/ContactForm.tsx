import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { ContactFormType, ContactFormSchema } from '@/types/forms/ContactForm'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Dispatch, SetStateAction } from 'react'

export default function ContactForm({ setDialog }: { setDialog: Dispatch<SetStateAction<boolean | undefined>> }) {
    const form = useForm<ContactFormType>({ resolver: zodResolver(ContactFormSchema) })
    
    async function onSubmit(values: ContactFormType) {
        const res = await fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify({ name: values.name, email: values.email, phone: values.phone })
        }).then(res => res.json())

        console.log(res)

        if(res.status === 200) return setDialog(false)
        form.setError('root', { message: 'An error occurred.' })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-2 pt-2'>
                <FormField name='name' control={form.control} render={({ field }) => (
                    <FormItem className='w-full'>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                            <Input className='w-full' placeholder='Name' {...field} />
                        </FormControl>
                    </FormItem>
                )} />

                <FormField name='email' control={form.control} render={({ field }) => (
                    <FormItem className='w-full'>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input className='w-full' placeholder='Email' {...field} />
                        </FormControl>
                    </FormItem>
                )} />

                <FormField name='phone' control={form.control} render={({ field }) => (
                    <FormItem className='w-full'>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                            <Input className='w-full' placeholder='Phone Number' {...field} />
                        </FormControl>
                    </FormItem>
                )} />

                <div className='flex w-full justify-end'>
                    <Button className='w-full sm:w-auto mt-5' type='submit'>Submit</Button>
                </div>
            </form>
        </Form>
    )
}