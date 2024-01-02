"use client"
import { Button } from "@/components/ui/button"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,

    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Bird, DollarSign } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
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

interface BookItem {
    param: string
}

interface ExampleData {
    // Define the structure of your fetched data
    // Modify this interface to match your actual data structure
    id: number;
    name: string;
    author: string,
    category: string,
    createdAt: string,
    description: string
    image: string,
    price: number
    type: string,
    // Add other properties as needed
}

interface Product {
    // Define the properties of your product
    type: string; // Assuming type is a string property
    // Add other properties here if available
    // For example: id: number, name: string, etc.
}
const BestProduct = ({ param }: BookItem) => {




    const [searchBook, setSearchBook] = useState("");
    const handleSearch = (input: string) => {
        setSearchBook(input);
    };
    console.log(searchBook);

    const [passedData, setPassedData] = useState<ExampleData[]>()

    const handleData = async () => {
        const res = await fetch("api/Product/CreateProduct");
        const data: ExampleData[] = await res.json();
        const filteredProducts: ExampleData[] = data.filter((product: ExampleData) => product.type === "Paperback");
        setPassedData(filteredProducts)
        console.log(data);
    }

    useEffect(() => {
        handleData()
    })





    // Update the document title using the browser API
    // const filterProductsByName = (): ExampleData[] => {
    //     // const lowerCaseInput = input.toLowerCase().trim();
    //     return passedData?.filter((product) =>
    //         product.type.toLowerCase().includes("Paperback")
    //     ) || [];
    // };

    // const filteredProducts = filterProductsByName();

    // console.log(filteredProducts);


    return (
        <div className="mb-10">
            <div className=" flex justify-center item-center mt-6 mb-6">
                {/* <Input onChange={(e) => handleSearch(e.target.value)} value={searchBook} type="email" className=" w-60 rounded-xl border-grey-700  " placeholder="Search..." /> */}
                <p className="text-2xl">
                    Paper Book
                </p>
            </div>

            <div className="flex flex-wrap gap-6">

                <div className=" flex flex-wrap gap-6">

                    {passedData?.map((el: any, i) => (

                        <div key={el.id}>
                            <Link href={`Detail/${el.id}`}>
                                <Card className="w-[350px]">
                                    <CardHeader>
                                        <CardTitle>{el.name}</CardTitle>
                                        <CardDescription>{el.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Image src={el.image} alt="Loading..." width={200} height={200} />
                                    </CardContent>
                                    <CardFooter className="flex justify-between">
                                        <Button variant="outline">{el.price}<DollarSign size={16} /></Button>
                                        <Button>Author : {el.author}</Button>
                                    </CardFooter>
                                </Card>
                            </Link>
                        </div>

                    ))}


                </div>


            </div>
        </div>
    )
}

export default BestProduct
