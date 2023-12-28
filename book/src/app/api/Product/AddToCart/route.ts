import client from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {

    try {
        const { userId, productId, quantity } = await request.json();
        const cartItem = await client.cart.create({
            data: {
                userId,
                productId,
                quantity,
            },
        });
        return NextResponse.json(cartItem, { status: 201 });
    } catch (error) {
        return new NextResponse("Internal error", { status: 500 });
    }

}

export async function GET(request: Request) {
    try {
        const cartItems = await client.cart.findMany();
        return NextResponse.json(cartItems, { status: 201 });
    } catch (error) {
        return new NextResponse("Internal error", { status: 500 });
    }
}
