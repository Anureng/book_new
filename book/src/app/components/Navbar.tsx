"use client"
import { Instagram, Linkedin, ShoppingCart, Twitter } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation'
import { signOut, useSession } from "next-auth/react";
import React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, UserCircle, UserCog } from "lucide-react";
import Link from 'next/link'

const Navbar = () => {
    const { data } = useSession()
    const router = useRouter()
    return (
        <div>

            <div className='bg-gray-200 flex items-center justify-evenly p-3'>
                <div className='text-red-600 font-bold text-xl '>
                    Reader
                </div>
                <div className='flex space-x-3'>
                    <Twitter />
                    <Instagram />
                    <Linkedin />
                </div>


                {
                    data?.user.name ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Avatar className=" cursor-pointer">
                                    <AvatarImage src={""} alt="@shadcn" />
                                    <AvatarFallback className="text-primary hover:bg-primary  transition-all">
                                        <UserCog className="h-5" />
                                    </AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="mr-6 bg-white">
                                <DropdownMenuLabel>
                                    <div className="pr-20 pl-4">
                                        <h1 className="font-semibold text-md ">Signed in as</h1>
                                        <h1 className="font-semibold text-md">{data?.user.email}</h1>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <div
                                    onClick={() => {
                                        signOut()
                                    }}
                                >
                                    <DropdownMenuItem className="hover:!bg-red-500 cursor-pointer hover:!text-white">
                                        <LogOut className="mr-2 h-4 w-4" />
                                        <span>Log out</span>
                                    </DropdownMenuItem>
                                </div>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <div>
                            <Link href="/">
                                Log In
                            </Link>
                        </div>
                    )
                }


            </div>

            <div className='flex items-center justify-evenly mt-6' >
                <div className='flex space-x-3'>
                    <p>
                        <Link href="/Book">
                            Home
                        </Link>
                    </p>
                    <p>
                        <Link href="/Allbook">
                            Books
                        </Link>
                    </p>
                    {/* <p>Contact</p> */}
                    <p>community</p>
                </div>

                <div className='flex items-center space-x-2'>
                    {/* <div className=' hidden sm:visible  bg-gray-200 p-1 items-center rounded-xl space-x-2'>
        <input type="text" placeholder='Search Product...' className='rounded-xl p-1 outline-none' />
        <BsSearch  className=""/>
        </div> */}
                    <div className="bg-red-400 text-white text-xl p-1 ">
                        <ShoppingCart />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar