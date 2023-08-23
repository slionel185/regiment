import type { LayoutProps } from '@/types/LayoutProps'

import Footer from '@/components/Footer'
import Navbar from '@/components/nav/Navbar'

export default function DashboardLayout({ children }: LayoutProps) {
    return (
        <div className='min-h-screen'>
            <Navbar />
            <div className='min-h-[90vh]'>
                {children}
            </div>
            <Footer />
        </div>
    )
}