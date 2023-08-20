import { z } from 'zod'

export const ContactFormSchema = z.object({
    name: z.string().min(1, { message: 'Name is required.' }),
    phone: z.string().min(1, { message: 'Phone Number is required' }),
    email: z.string().min(1, { message: 'Email is required.' }).email({ message: 'Must be a valid email.' })
})

export type ContactFormType = z.infer<typeof ContactFormSchema>