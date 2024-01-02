"use client"
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
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
            location.reload()
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
        <div className='flex items-center justify-center'>
            {/* <input type="text" placeholder='enter comment' value={commentData} onChange={(e) => setCommentData(e.target.value)} />
            <input type="number" placeholder='Enter rating' value={ratingData} onChange={handleChange} />
            <button onClick={handleAddReview} className=''>Click to add Review</button> */}
            <main className="w-full max-w-4xl mx-auto mt-10 px-4">
                <Card className="p-6 grid gap-6">
                    <h1 className="text-3xl font-semibold mb-8">Product Reviews</h1>
                    <CardHeader className="items-center space-y-2 p-0">
                        <h2 className="text-2xl font-semibold">Leave a Comment</h2>
                    </CardHeader>
                    <CardContent className="p-0">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                            Star
                        </label>
                        <input
                            className="mt-1 block w-full p-2 shadow-sm sm:text-sm rounded-md"
                            id="name"
                            name="name"
                            placeholder="Enter number"
                            type="number"
                            value={ratingData} onChange={handleChange}
                        />
                        <label className="block mt-4 text-sm font-medium text-gray-700" htmlFor="comment">
                            Comment
                        </label>
                        <textarea
                            className="mt-1 block w-full p-2 shadow-sm sm:text-sm rounded-md"
                            id="comment"
                            name="comment"
                            placeholder="Your Comment"
                            value={commentData} onChange={(e) => setCommentData(e.target.value)}
                        />
                        <Button onClick={handleAddReview} className="mt-4" size="lg">
                            Submit Comment
                        </Button>
                    </CardContent>
                </Card>
            </main>
        </div>
    )
}

export default CreateReview
