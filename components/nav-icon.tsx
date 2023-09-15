"use client"
import React, { useState } from 'react'
import { FileIcon, HomeIcon, PlusIcon } from '@radix-ui/react-icons'
import { usePathname, useRouter } from "next/navigation"
import { cn } from '@/lib/utils'
import { Heart } from 'lucide-react'

const NavIcon = ({ flex }: { flex: "vertical" | "horizontal" }) => {
    const router = useRouter();
    const pathname = usePathname();
    const [clicked, setClicked] = useState(0);
    return (
        <div className={flex == "vertical" ? "flex items-center space-x-4 justify-center pb-3" : "flex flex-col items-center justify-center space-y-3"}>
            <HomeIcon onClick={() => {
                router.push("/");
                setClicked(0);
            }} className={cn("w-8 h-8 text-black dark:text-gray-100 rounded-md cursor-pointer font-bold hover:bg-primary/10 p-1", pathname == "/" ? "bg-primary/10" : null)} />
            <PlusIcon
                onClick={() => {
                    router.push("/add-photo");
                    setClicked(1);
                }} className={cn("w-8 h-8 text-black dark:text-gray-100 rounded-md cursor-pointer font-bold hover:bg-primary/10 p-1", pathname == "/add-post" ? "bg-primary/10" : null)} />
            <FileIcon
                onClick={() => {
                    router.push("/photos");
                    setClicked(2);
                }}
                className={cn("w-8 h-8 text-black dark:text-gray-100 rounded-md cursor-pointer font-bold hover:bg-primary/10 p-1", pathname == "/photos" ? "bg-primary/10" : null)} />
            <Heart
                onClick={() => {
                    router.push("/favorites");
                    setClicked(3);
                }} className={cn("w-8 h-8 text-black dark:text-gray-100 rounded-md cursor-pointer font-bold hover:bg-primary/10 p-1", pathname == "/videos" ? "bg-primary/10" : null)} />
        </div>
    )
}

export default NavIcon