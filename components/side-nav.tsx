import { UserButton } from '@clerk/nextjs'
import { ModeToggle } from './mode-toggle'
import Image from "next/image"
import NavIcon from './nav-icon'

const SideNav = () => {
  return (
    <div className='sticky top-0 left-0'>
      <div className='w-[60px] hidden sm:flex flex-col bg-slate-200 dark:bg-neutral-600 space-y-2 pt-2 h-screen '>

        <div className="flex flex-col items-center justify-between h-full">
          <div className="flex items-center justify-center">
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
          </div>
          <div className=" h-full mt-5">
            <NavIcon flex="horizontal" />

          </div>
          <div className="space-y-4 mb-3">
            <ModeToggle />
            <UserButton />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideNav
