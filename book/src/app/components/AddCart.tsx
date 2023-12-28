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




    useEffect(() => {
        handleProductData()
    })
    return (
        <div className='p-4 border rounded-xl'>
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
                                    {el.name}
                                </TableCell>
                                <TableCell className='space-y-4'>
                                    {/* {apiData?.day} */}
                                    {el.author}
                                </TableCell>
                                <TableCell className='space-y-4'>
                                    {el.price}
                                </TableCell>
                                <TableCell className='space-y-4'>
                                    {/* {apiData?.activity} */}
                                    {el.category}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>

                </div>
            ))}
        </div>
    )
}

export default AddCart
