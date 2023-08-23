'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Menu, Moon } from 'lucide-react'
import { signOut, useSession } from 'next-auth/react'

import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle, NavigationMenuTrigger, NavigationMenuContent } from '@/components/ui/navigation-menu'

export default function Navbar() {
    const { data } = useSession()
    const { setTheme, theme } = useTheme()

    return (
        <div className='flex w-full justify-center items-center border-b h-[75px]'>
            <div className='flex w-full max-w-7xl justify-between p-2 px-4 gap-4'>
                <div className='sm:flex flex-col hidden'>
                    <h1 className='scroll-m-20 text-3xl font-extrabold tracking-tight'>Regiment</h1>
                    <p className='text-muted-foreground text-sm'>Personal Training</p>
                </div>
                <div className='flex flex-1 justify-start items-center sm:hidden gap-4'>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button size={'icon'} variant={'outline'}><Menu /></Button>
                        </SheetTrigger>
                        <SheetContent side={'top'}>
                            <SheetHeader>
                                <SheetTitle className='scroll-m-20 text-3xl font-extrabold tracking-tight'>Regiment</SheetTitle>
                            </SheetHeader>
                            <div className='flex flex-col gap-4 pt-6'>
                                <Button asChild variant={'outline'}>
                                    <a href='/dashboard' className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'>
                                        <div className='text-sm w-full font-medium leading-none'>Dashboard</div>
                                    </a>
                                </Button>
                                <Button asChild variant={'outline'}>
                                    <a href='/dashboard/calendar' className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'>
                                        <div className='text-sm w-full font-medium leading-none'>Calendar</div>
                                    </a>
                                </Button>
                                <Accordion type='single' collapsible className='w-full border-none'>
                                    <AccordionItem value='sales' className='w-full border-none'>
                                        <AccordionTrigger>Sales</AccordionTrigger>
                                        <AccordionContent>
                                            <div className='flex flex-col gap-4'>
                                                <Button asChild variant={'outline'}>
                                                    <a href='/dashboard' className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'>
                                                        <div className='text-sm w-full font-medium leading-none'>Prospects</div>
                                                    </a>
                                                </Button>
                                                <Button asChild variant={'outline'}>
                                                    <a href='/dashboard' className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'>
                                                        <div className='text-sm w-full font-medium leading-none'>Members</div>
                                                    </a>
                                                </Button>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value='training' className='border-none'>
                                        <AccordionTrigger className='no-underline'>
                                            Training
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className='flex flex-col gap-4'>
                                                <Button asChild variant={'outline'}>
                                                    <a href='/dashboard' className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'>
                                                        <div className='text-sm w-full font-medium leading-none'>Prospects</div>
                                                    </a>
                                                </Button>
                                                <Button asChild variant={'outline'}>
                                                    <a href='/dashboard' className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'>
                                                        <div className='text-sm w-full font-medium leading-none'>Clients</div>
                                                    </a>
                                                </Button>
                                                <Button asChild variant={'outline'}>
                                                    <a href='/dashboard' className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'>
                                                        <div className='text-sm w-full font-medium leading-none'>Plans</div>
                                                    </a>
                                                </Button>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </SheetContent>
                    </Sheet>
                    <h1 className='scroll-m-20 text-3xl font-extrabold tracking-tight'>Regiment</h1>
                </div>
                <div className='sm:flex flex-1 items-center hidden'>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Link href={'/dashboard'} passHref legacyBehavior>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Dashboard
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            
                            <NavigationMenuItem>
                                <Link href={'/dashboard/calendar'} passHref legacyBehavior>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Calendar
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Sales</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className='flex flex-col gap-2 p-3 w-[400px]'>
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <a href='/dashboard' className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'>
                                                    <div className='text-sm font-medium leading-none'>Prospects</div>
                                                    <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>Search potential members.</p>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>

                                        <li>
                                            <NavigationMenuLink asChild>
                                                <a href='/dashboard' className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'>
                                                    <div className='text-sm font-medium leading-none'>Members</div>
                                                    <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>Search existing members.</p>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Training</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className='flex flex-col gap-2 p-4 w-[400px]'>
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <a href='/dashboard' className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'>
                                                    <div className='text-sm font-medium leading-none'>Prospects</div>
                                                    <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>Search potential clients.</p>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>

                                        <li>
                                            <NavigationMenuLink asChild>
                                                <a href='/dashboard' className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'>
                                                    <div className='text-sm font-medium leading-none'>Clients</div>
                                                    <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>Search existing clients.</p>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>

                                        <li>
                                            <NavigationMenuLink asChild>
                                                <a href='/dashboard' className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'>
                                                    <div className='text-sm font-medium leading-none'>Clients</div>
                                                    <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>Create and manage your plans.</p>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className='flex flex-1 gap-2 justify-end items-center'>
                    <Button variant={'ghost'} size={'icon'} onClick={() => setTheme(theme === 'light'? 'dark' : 'light' )}>
                        <Moon className='h-6 w-6' />
                    </Button>
                    <Avatar className='cursor-pointer' onClick={() => signOut()}>
                        <AvatarImage src={data?.user.image || ''} />
                        <AvatarFallback>{data?.user.email.split('')[0].toUpperCase()}</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </div>
    )
}