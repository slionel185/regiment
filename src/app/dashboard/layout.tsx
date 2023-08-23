import type { LayoutProps } from '@/types/LayoutProps'

import Footer from '@/components/Footer'
import Navbar from '@/components/nav/Navbar'

export default function DashboardLayout({ children }: LayoutProps) {
    return (
        <section className='min-h-screen'>
            <Navbar />
            <div className='h-full'>
                {children}
            </div>
            <Footer />
        </section>
    )
}