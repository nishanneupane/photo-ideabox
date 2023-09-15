import PhotosModal from '@/components/photos-modal';
import { db } from '@/lib/db';
import { initialProfile } from '@/lib/initial-profile'
import { redirectToSignIn } from '@clerk/nextjs';
import React from 'react'

const Photos = async () => {
    const profile = await initialProfile();
    if (!profile) {
        redirectToSignIn();
    }

    const photos = await db.photo.findMany({
        where: {
            profile
        }
    })
    if (!photos) {
        return (
            <div className='flex items-center justify-center'>
                <span className='text-sm font-semibold'>No Photos Available</span>
            </div>
        )
    }
    return (
        <PhotosModal photos={photos} profile={profile}/>
    )
}

export default Photos