'use client'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import ContactForm from '@/components/forms/ContactForm'
import { Dialog, DialogHeader,DialogContent, DialogTitle, DialogTrigger, DialogDescription } from '@/components/ui/dialog'

export default function ContactModal() {
    const [isOpen, setIsOpen] = useState<boolean>()

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button>Contact</Button>
            </DialogTrigger>
            <DialogContent className='gap-0 w-[400px]'>
                <DialogHeader>
                    <DialogTitle className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>Contact</DialogTitle>
                    <DialogDescription>Fill this form out and we will reach out to you as soon as we see it!</DialogDescription>
                </DialogHeader>
                <ContactForm setDialog={setIsOpen} />
            </DialogContent>
        </Dialog>
    )
}