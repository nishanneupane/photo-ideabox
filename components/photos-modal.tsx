"use client"
import React, { useState } from 'react';
import SideNav from './side-nav';
import Image from 'next/image';
import PhotoCard from './photo-card';
import { Photo, Profile } from '@prisma/client';
import BottomBar from './bottom-bar';

interface PhotosModalProps {
    photos: Photo[];
    profile: Profile;
}

const PhotosModal = ({ photos, profile }: PhotosModalProps) => {
    const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

    const handleImageClick = (url: string) => {
        setSelectedPhoto(url);
    };

    const handleClosePhotoCard = () => {
        setSelectedPhoto(null);
    };

    return (
        <>
            <div className='flex w-full'>
                <div>
                    <SideNav />
                    <BottomBar />
                </div>
                <div className="w-full flex flex-col m-0 space-y-4 pb-6">
                    <h2 className='text-center font-bold text-neutral-800 text-4xl dark:text-neutral-200 bg-neutral-200 dark:bg-neutral-700 py-2'>All Photos</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 h-full p-2 space-x-2 space-y-2">
                        {photos.map((item) => (
                            <div key={item.id} onClick={() => handleImageClick(item.url)} className='group max-h-[300px] relative cursor-pointer'>
                                <Image
                                    src={item.url}
                                    width={180}
                                    height={180}
                                    className='rounded-lg object-contain cursor-pointer relative -z-10'
                                    alt="photo"
                                />
                                
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {selectedPhoto && (
                <PhotoCard
                    url={selectedPhoto}
                    profile={profile}
                    onClose={handleClosePhotoCard}
                />
            )}
        </>
    );
}

export default PhotosModal;
