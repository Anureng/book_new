"use client"
import { saveBooksToLocalStorage } from '@/libs/localStorage';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'


interface DetailData {
    param: string;
}

interface Book {
    author: string;
    category: string;
    createdAt: string;
    description: string;
    id: number;
    image: string;
    name: string;
    price: number;
    reviews: any[]; // Assuming reviews will be an array of any type
    type: string;
    updatedAt: string;
}

const DetailProduct: React.FC<DetailData> = ({ param }) => {

    const [savedData, setSavedData] = useState<Book>()
    const { data } = useSession()


    useEffect(() => {
        const handleClick = async () => {
            const res = await fetch(`/api/Product/UpdateProduct/${param}`)
            const data = await res.json()
            setSavedData(data)
            // console.log(data);
        }
        handleClick()
    })

    const handleStoreToLocale = async () => {
        try {
            const res = await fetch("/api/Product/AddToCart", {
                method: "POST",
                body: JSON.stringify({
                    userId: data?.user.id,
                    productId: param,
                    quantity: 1
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            // console.log(res.json());
            alert("Add to Cart Success Fully")
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <div className=' h-fit flex gap-x-16 justify-center p-4 '>
            <div>
                {
                    savedData?.image && <Image src={savedData?.image} alt="Loading..." width={650} height={650} />
                }

            </div>
            <div className='space-y-4'>
                <h1 className='text-3xl font-semibold'>{savedData?.name}</h1>
                <p className='font-light'>{savedData?.description}</p>

                {/* <label htmlFor="Price" className='text-2xl font-bold'>Price  </label> */}
                <p className='text-xl font-semi-bold'>${savedData?.price}</p>

                <div className=''>
                    <label htmlFor="Author" className='text-2xl font-bold'>Author  </label>
                    <p className='font-light'>{savedData?.author}</p>
                </div>
                <div>
                    <p className='text-2xl font-bold'>Type</p>
                    <p className='font-light'>{savedData?.type}</p>
                </div>
                <div>
                    <p className='text-2xl font-bold'>Category</p>
                    <p className='font-light'>{savedData?.category}</p>
                </div>
                <button onClick={handleStoreToLocale} className='border border-black w-3/5 rounded-lg bg-black text-white h-8'>Add to cart</button>
            </div>
        </div>
    )
}

export default DetailProduct
