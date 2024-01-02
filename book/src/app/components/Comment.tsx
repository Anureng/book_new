"use client"
import React, { useEffect, useState } from 'react'
import { Rating } from 'react-simple-star-rating'
interface ProductReview {
    id: string;
    rating: number;
    comment: string;
    createdAt: string;
    updatedAt: string;
    productId: string;
}

interface DetailData {
    param: string;
}

import { Avatar } from "@/components/ui/avatar"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const Comment = ({ param }: DetailData) => {
    const [dataComment, setDataComment] = useState<ProductReview[]>([])
    const [commentCount, setDataCommentCount] = useState(0)
    const [rating, setRating] = useState(0)
    const commentData = async () => {
        const fetchData = await fetch("/api/Product/CreateReview")
        const data = await fetchData.json()
        console.log(data);
        setDataComment(data)
        setDataCommentCount(data.length)
        console.log(data.length);
    }



    useEffect(() => {
        commentData()
    })
    return (
        <div>
            {/* {dataComment.map((el) => (
                <div>
                    {el.productId === param ? (
                        <div>{el.comment}</div>
                    ) : (
                        <div></div>
                    )}
                </div>
            ))} */}

            <div>
                {setDataCommentCount.length == 0 ? "No Comment" : ""}
            </div>

            <main className="w-full max-w-4xl mx-auto mt-10 px-4">
                {/* <h1 className="text-3xl font-semibold mb-8">Product Reviews</h1> */}
                <div className="space-y-8">
                    {dataComment.map((el) => (
                        <div key={el.productId}>
                            {el.productId === param ? (
                                <Card className="p-6 grid gap-6">
                                    <CardHeader className="items-center space-y-2 p-0">
                                        <Avatar className="w-12 h-12" />
                                        <div className="grid gap-1">
                                            <CardTitle className="text-lg">

                                                <div>

                                                    <div>{el.rating} Star</div>

                                                </div>

                                            </CardTitle>
                                            <CardDescription className="text-sm text-gray-500">
                                                <div>

                                                    <div>{el.createdAt}</div>

                                                </div>
                                            </CardDescription>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="p-0 flex items-center justify-center" >

                                        <div>

                                            <div>{el.comment}</div>

                                        </div>

                                    </CardContent>
                                </Card>
                            ) : (
                                <div></div>
                            )}

                        </div>
                    ))}

                </div>

            </main>
        </div>
    )
}

export default Comment
