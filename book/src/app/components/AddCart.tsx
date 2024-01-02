"use client"
import { getBooksFromLocalStorage } from '@/libs/localStorage';
import React, { useEffect, useState } from 'react'
import { signOut, useSession } from "next-auth/react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Image from 'next/image';
import { Bird } from 'lucide-react';
interface Book {
    author: string;
    category: string;
    createdAt: string;
    description: string;
    id: string;
    image: string;
    name: string;
    price: number;
    type: string;
    updatedAt: string;
}

const AddCart = () => {
    const { data: sessionData } = useSession()

    const [productData, setProductData] = useState<Book[]>([])

    const [checingData, setCheckingData] = useState("")

    const handleProductData = async () => {
        try {
            const data = await fetch('api/Product/AddToCart')
            const getData = await data.json()
            // console.log(getData);
            const updatedProducts = await Promise.all(
                getData.map(async (el: any) => {
                    if (el.userId === sessionData?.user.id) {
                        const productResponse = await fetch(`api/Product/UpdateProduct/${el.productId}`);
                        const productData = await productResponse.json();
                        return productData; // Return the updated product details
                    }
                    else {
                        console.log("No product in the cart");
                    }
                })
            );
            setProductData(updatedProducts)
                ; // Update state with the updated product data
            // console.log(updatedProducts);
        } catch (error) {
            console.log(error);
        }
    }






    const [countData, setCountData] = useState(0)
    const addToCart = async () => {
        const fetchData = await fetch("api/Product/AddToCart")
        const dataFrom = await fetchData.json()
        if (sessionData?.user.id === dataFrom[0].userId) {
            // console.log(dataFrom);
            setCountData(dataFrom.length)
            // console.log(countData);
        }
        else {
            setCountData(0)
        }
    }
    // const checkInData = async () =>{
    //     try {
    //         const data = await fetch('api/Product/AddToCart')
    //         const getData = await data.json()
    //         // console.log(getData);
    //         const updatedProducts = await Promise.all(
    //             getData.map(async (el: any) => {
    //                 if (el.userId === sessionData?.user.id) {
    //                     const productResponse = await fetch("api/Product/AddToCart");
    //                     const productData = await productResponse.json();
    //                     return productData; // Return the updated product details
    //                 }
    //                 else {
    //                     console.log("No product in the cart");
    //                 }
    //             })
    //         );
    //         setProductData(updatedProducts)
    //             ; // Update state with the updated product data
    //         // console.log(updatedProducts);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }


    useEffect(() => {
        handleProductData()
        addToCart()
    })

    return (
        <div className='p-4  rounded-xl'>

            {countData === 0 ? (
                <div className="flex flex-col items-center justify-center  w-screen h-96 text-2xl">
                    <p ><Bird size={150} /></p>
                    <p>
                        No Item in the Cart...
                    </p>
                </div>
            ) : (
                <div>
                    {productData.map((el) => (
                        <div key={el?.id} className='flex '>


                            <Table className='rounded-xl '>
                                <TableHeader className='bg-[#F1F5F9] '>
                                    <TableRow>
                                        <TableHead className=' text-black'>
                                            Name
                                        </TableHead>
                                        <TableHead className=' text-black'>
                                            Author
                                        </TableHead>
                                        <TableHead className=' text-black'>
                                            Price
                                        </TableHead>
                                        <TableHead className=' text-black'>
                                            Category
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>

                                <TableBody className='space-y-2'>
                                    <TableRow  >
                                        <TableCell className='space-y-4'>
                                            {el?.name}
                                        </TableCell>
                                        <TableCell className='space-y-4'>
                                            {/* {apiData?.day} */}
                                            {el?.author}
                                        </TableCell>
                                        <TableCell className='space-y-4'>
                                            {el?.price}
                                        </TableCell>
                                        <TableCell className='space-y-4'>
                                            {/* {apiData?.activity} */}
                                            {el?.category}
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    ))}
                </div>
            )}

        </div>
    )
}

export default AddCart
