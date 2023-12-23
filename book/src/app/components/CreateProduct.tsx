"use client"
import React, { ChangeEvent, useState } from 'react'
import { CldUploadButton, CldUploadWidgetResults } from 'next-cloudinary';
const CreateProduct = () => {

    const [imageUrl, setImageUrl] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [category, setCategory] = useState<string>("")
    const [price, setPrice] = useState<number>(0)
    const [description, setDescription] = useState<string>("")
    const [type, setType] = useState<string>("")
    const [author, setAuthor] = useState<string>("")

    const handleUploadImage = (result: CldUploadWidgetResults) => {
        const info = result.info as object;
        if ("public_id" in info && "secure_url" in info) {
            setImageUrl(info.secure_url as string)
        }
    }

    const handleAddData = async () => {
        try {
            const res = await fetch("/api/Product/CreateProduct", {
                method: "POST",
                body: JSON.stringify({
                    name: name,
                    category: category,
                    image: imageUrl,
                    price: price,
                    description: description,
                    type: type,
                    author: author
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            console.log(res.json());
        } catch (error) {
            console.log(error);

        }


    }

    const handlePriceChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value; // Get the input value as a string
        const parsedValue = parseFloat(value); // Convert the string to a number
        setPrice(parsedValue)
    };


    return (
        <div>
            <input type="text" placeholder='enter name' value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder='enter category' value={category} onChange={(e) => setCategory(e.target.value)} />
            <CldUploadButton uploadPreset="qlvvng0p" onUpload={handleUploadImage} >
                Click to upload
            </CldUploadButton>
            <input type="number" placeholder='enter price' value={price} onChange={handlePriceChange} />
            <input type="text" placeholder='description' value={description} onChange={(e) => setDescription(e.target.value)} />
            <input type="text" placeholder='type' value={type} onChange={(e) => setType(e.target.value)} />
            <input type="text" placeholder='author' value={author} onChange={(e) => setAuthor(e.target.value)} />
            <button onClick={handleAddData}>click to add data</button>
        </div>
    )
}

export default CreateProduct
