'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'

export default function RedirectButton({ to, children }: { to: string, children: React.ReactNode }) {
    const router = useRouter()

    return (
        <Button onClick={() => router.push(to)} variant={'ghost'}>{children}</Button>
    )
}