'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'

export default function RedirectButton({ to, children, size }: { to: string, children: React.ReactNode, size?: 'sm' | 'default' | 'lg' | 'icon' | undefined | null }) {
    const router = useRouter()

    return (
        <Button onClick={() => router.push(to)} variant={'ghost'} size={size ?? 'default'} >{children}</Button>
    )
}