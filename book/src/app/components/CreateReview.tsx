"use client"
import React, { ChangeEvent, useState } from 'react'


interface DetailData {
    param: string;
}

const CreateReview = ({ param }: DetailData) => {

    const [commentData, setCommentData] = useState("")
    const [ratingData, setRatingData] = useState<number>(0)

    const handleAddReview = async () => {
        try {
            const res = await fetch("http://localhost:3000/api/Product/CreateReview", {
                method: "POST",
                body: JSON.stringify({
                    rating: ratingData,
                    comment: commentData,
                    productId: param
                }),
                headers: {
                    "Content-Type": "application/json",
                }
            })
            console.log(res.json());
        } catch (error) {
            console.log(error);

        }
    }



    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const data = parseFloat(value)
        setRatingData(data)
    }

    return (
        <div>
            <input type="text" placeholder='enter comment' value={commentData} onChange={(e) => setCommentData(e.target.value)} />
            <input type="number" placeholder='Enter rating' value={ratingData} onChange={handleChange} />
            <button onClick={handleAddReview}>Click to add Review</button>
        </div>
    )
}

export default CreateReview
