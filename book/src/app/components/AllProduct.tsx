"use client"
import React, { useEffect, useState } from 'react'


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

const initialBookState: Book = {
    author: "Peter Wohlleben",
    category: "Science & Nature",
    createdAt: "2023-12-13T15:07:37.609Z",
    description: "Explore the hidden world of trees and their incredible communication abilities.",
    id: "6579c8b9baff391f0aa8a9bd",
    image: "https://res.cloudinary.com/dd8ckn2oz/image/upload/v1702480000/products/rp5jrvtexkwa0tdv2d7e.jpg",
    name: "The Secret Life of Trees",
    price: 24,
    type: "Hardcover",
    updatedAt: "2023-12-13T15:07:37.609Z"
};
const AllProduct = () => {
    const [data, setData] = useState<Book[]>()
    useEffect(() => {
        // Update the document title using the browser API

    }, []);

    console.log(data)

    const handleClick = async () => {
        const response = await fetch("api/Product/CreateProduct");
        const data = await response.json();
        console.log(data);
        setData(data)

    }

    return (
        <div>
            <button onClick={handleClick}> click to show data</button>
            {data?.map((el) => (
                <div key={el.id}>{el.name}</div>
            ))}
        </div>
    )
}

export default AllProduct
