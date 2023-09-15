import Image from 'next/image'
import React from 'react'
import NavIcon from './nav-icon'
import { ModeToggle } from './mode-toggle'
import { UserButton } from '@clerk/nextjs'

const BottomBar = () => {
    return (
        <div className='h-[60px] w-full md:hidden  bg-slate-200 dark:bg-neutral-600 fixed bottom-0 left-0 right-0'>
            <div className="flex items-center justify-between px-4 pt-3">
                <Image
                    src={"/logo.png"}
                    height={40}
                    width={40}
                    alt='logo'
                    className='rounded-lg flex items-center justify-center'
                    style={{
                        color: 'white',
                        fontWeight: 'bold',
                    }}
                />
                <NavIcon flex={"vertical"} />
                <div className="flex items-center justify-center">
                    <ModeToggle />
                    <UserButton />
                </div>
            </div>
        </div>
    )
}

export default BottomBar