import CreateReview from '@/app/components/CreateReview';
import DetailProduct from '@/app/components/DetailProduct';
import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import React from 'react'

export interface IParams {
    id: string;
}
const page = async ({ params }: { params: IParams }) => {
    // const data = await getData({ params}:{})
    // console.log(data);

    return (
        <div>
            <Navbar />
            {/* {params.id} */}
            {/* {data.name} */}
            <DetailProduct param={params.id} />
            {/* <CreateReview param={params.id} /> */}
            <Footer />
        </div>
    )
}
export default page
