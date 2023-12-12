
import client from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { name, category, image, price, description, type, author } = await request.json();

        // Check if the provided productId exists before creating the review

        const newReview = await client.product.create({
            data: {
                name, category, image, price, description, type, author
            }
        });

        return NextResponse.json(newReview, { status: 201 });
    } catch (error) {
        console.error("Error creating review:", error);
        return new NextResponse("Internal error", { status: 500 });
    }
}