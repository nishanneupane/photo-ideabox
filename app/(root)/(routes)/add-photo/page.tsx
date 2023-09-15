import AddPhotoModal from '@/components/add-photo-modal';
import { initialProfile } from '@/lib/initial-profile'
import { redirectToSignIn } from '@clerk/nextjs';
import React from 'react'

const AddPhoto = async () => {
    const profile = await initialProfile();
    if (!profile) {
        redirectToSignIn();
    }

    return (
        <AddPhotoModal/>
    )
}

export default AddPhoto