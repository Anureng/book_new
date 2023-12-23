"use client"
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
    id: string;
    image: string;
    name: string;
    price: number;
    reviews: any[]; // Assuming reviews will be an array of any type
    type: string;
    updatedAt: string;
}

const DetailProduct: React.FC<DetailData> = ({ param }) => {

    const [savedData, setSavedData] = useState<Book>()

    // const handleClick = async () => {
    //     const res = await fetch(`/api/Product/UpdateProduct/${param}`)
    //     const data = await res.json()
    //     console.log(data);
    //     setSavedData(data)
    // }

    // useEffect(() => {
    //     handleClick()
    // }, [])



    return (
        <div className='border border-black h-fit flex gap-x-16 justify-center p-4 '>
            <div>
                {savedData && savedData.image && (
                    <Image
                        src={savedData.image} // Ensure savedData.image is not undefined here
                        className='rounded-xl'
                        alt='Loading...'
                        width={550}
                        height={550}
                    />
                )}
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
                <button className='border border-black w-3/5 rounded-lg bg-black text-white h-8'>Add to cart</button>
            </div>
        </div>
    )
}

export default DetailProduct
