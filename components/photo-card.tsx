import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent } from './ui/dialog';
import Image from 'next/image';
import { Profile } from '@prisma/client';
import { Cross, Heart } from 'lucide-react';
import { AiFillHeart } from "react-icons/ai"

const PhotoCard = ({ url, profile, onClose }: { url: string; profile: Profile; onClose: () => void }) => {
    const [open, setOpen] = useState(true);

    const handleClose = () => {
        setOpen(false);
        onClose();
    };

    const [clicked, setClicked] = useState(false);
    // useEffect(() => {

    // }, [clicked])
    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent className="bg-white dark:bg-neutral-700 p-0 overflow-hidden pb-2">
                <div className="cursor-pointer relative group">
                    <div className="absolute top-0 right-0 px-3 py-2" onClick={handleClose}><Cross className='w-6 h-6 text-neutral-600 dark:text-neutral-400' /></div>
                    <Image
                        src={url}
                        alt='image'
                        width={500}
                        height={500}
                        className='rounded-lg object-contain max-w-[500px] max-h-[500px]'
                    />
                    <div className="absolute bottom-0 w-full items-center justify-start bg-neutral-200 dark:bg-neutral-700 px-1 rounded-md opacity-50">
                        <div className="hidden group-hover:flex space-x-2 items-center justify-center">
                            <Image
                                src={profile?.imageUrl}
                                alt='user'
                                width={12}
                                height={12}
                                className='w-8 h-8 rounded-full'
                            />
                            <p>{profile?.name}</p>
                        </div>
                    </div>
                    <div className="absolute top-0 left-0 py-3 px-5">
                        {
                            clicked ?
                                <AiFillHeart className={` w-6 h-6 text-rose-600`} onClick={() => setClicked(false)} />
                                : <Heart className={` w-6 h-6 text-neutral-600 dark:text-neutral-400`} onClick={() => setClicked(false)} />
                        }
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default PhotoCard;
