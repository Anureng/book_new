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
