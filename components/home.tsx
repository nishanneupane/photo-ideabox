"use client"
import React from 'react'
import Image from "next/image"
import Link from 'next/link'
import { CldUploadButton } from 'next-cloudinary'

const Home = ({ profile }: any) => {
    return (
        <>
            <div className='w-full flex justify-center mt-12 h-full'>

                <div className="grid grid-cols-1 sm:grid-cols-2 h-[500px]">
                    <div className="bg-neutral-300 dark:bg-neutral-700 flex flex-col md:flex-row md:ms-5 items-center w-full p-5 rounded-xl space-x-4">
                        <Image
                            src={profile?.imageUrl}
                            height={120}
                            width={120}
                            alt={profile?.name}
                            className='rounded-full object-contain'
                        />
                        <div className='flex flex-col space-y-3'>
                            <div className="">
                                <h1 className='font-bold font-sans text-xl mb-2'><span>Hi</span> <span className='text-sky-700 dark:text-sky-400 text-4xl'>{profile?.name}</span></h1>
                                <p>Explore the Most Advanced Photo software</p>
                            </div>
                            <Link
                                href={"/photos"}
                                className='text-white bg-gradient-to-r from-sky-600 via-blue-400 to-purple-600 rounded-xl p-2 font-semibold w-44 '
                            >Browse My Photos</Link>
                        </div>
                    </div>

                    <img
                        src='https://courseverseonline.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.e0e176b6.png&w=2048&q=75'
                        className='w-[450px] h-[450px]'
                    />
                </div>
            </div>
        </>

    )
}

export default Home