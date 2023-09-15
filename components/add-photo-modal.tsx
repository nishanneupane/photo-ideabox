"use client"
import React from 'react';
import { useRouter } from 'next/navigation'; // Use next/router for client-side routing
import { CldUploadButton } from 'next-cloudinary';
import { Cross2Icon } from '@radix-ui/react-icons';
import SideNav from './side-nav';
import axios from "axios";
import { addPhoto } from '@/lib/photo.action';
import BottomBar from './bottom-bar';

const AddPhotoModal = () => {
    const router = useRouter();

    const handleUploadSuccess = async (response: any) => {
        console.log(response);
        const imageUrl = response?.info?.url;
        console.log("imageUrl:", imageUrl);

        if (imageUrl) {
            try {
                await addPhoto(imageUrl);
                router.push("/");
            } catch (error) {
                console.error(error);
                // Handle error appropriately, e.g., show a user-friendly message
            }
        } else {
            console.error("No secure_url found in the Cloudinary response.");
            // Handle the case where secure_url is missing
        }
    };




    return (
        <div className="flex">
            <SideNav />
            <BottomBar />
            <div className="space-y-8 px-6 flex items-center justify-center w-full mt-12 relative">
                <div className="bg-white dark:bg-neutral-700 p-6 overflow-hidden pb-2 flex flex-col items-center justify-start rounded-lg space-y-3">
                    <div className="pt-8 px-6">
                        <div className="text-2xl text-center font-bold">Add a Photo</div>
                        <div className="text-center text-zinc-500">Enjoy your day by uploading your photo to the cloud</div>
                    </div>

                    <div className="flex items-center justify-center text-center">
                        <button
                            // onClick={handleUploadSuccess}
                            className='w-full bg-sky-600 text-white dark:text-neutral-700 dark:bg-sky-400 rounded-lg p-3 px-7'
                        >
                            <CldUploadButton
                                uploadPreset="xe72syfe" // Your Cloudinary upload preset
                                onSuccess={handleUploadSuccess}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPhotoModal;
