import BottomBar from '@/components/bottom-bar'
import FavoritePhotos from '@/components/favorite-photos'
import SideNav from '@/components/side-nav'
import { db } from '@/lib/db'
import { initialProfile } from '@/lib/initial-profile'
import { redirectToSignIn } from '@clerk/nextjs'
import React from 'react'

const Favorites = async () => {
    const profile: any = initialProfile();
    if (!profile) {
        redirectToSignIn();
    }

    const favorites = await db.favorite.findMany({
        where: {
            userId: profile?.userId,
        }
    })
    if (!favorites || favorites.length <= 0) {
        return (
            <div>
                <div className="flex">
                    <SideNav />
                    <BottomBar />
                    <div className="">
                        <h1 className="items-center font-semibold text-3xl dark:text-white text-neutral-800 text-center ps-5 pt-3">Favorites</h1>

                        <div className=' flex items-center justify-center flex-col mt-12 px-5'>
                            <h1 className='text-neutral-500 text-sm'>No photos to show</h1>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

    return (
        <FavoritePhotos favorites={favorites} />
    )

}

export default Favorites