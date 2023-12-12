import client from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { rating, comment, productId } = await request.json();

        // Check if the provided productId exists before creating the review
        const existingProduct = await client.product.findUnique({
            where: {
                id: productId
            }
        });

        if (!existingProduct) {
            return new NextResponse("Product not found", { status: 404 });
        }

        const newReview = await client.review.create({
            data: {
                rating,
                comment,
                productId
            }
        });

        return NextResponse.json(newReview, { status: 201 });
    } catch (error) {
        console.error("Error creating review:", error);
        return new NextResponse("Internal error", { status: 500 });
    }
}
