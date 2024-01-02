import AllProduct from '@/app/components/AllProduct'
import BestProduct from '@/app/components/BestProduct'
import BestSell from '@/app/components/BestSell'
import CreateProduct from '@/app/components/CreateProduct'
import ProductForm from '@/app/components/CreateProduct'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import LoginForm from '@/app/components/LoginForm'
import Navbar from '@/app/components/Navbar'
import RegisterForm from '@/app/components/RegisterForm'
import React from 'react'

export interface IParams {
    id: string;
}

const page = ({ params }: { params: IParams }) => {
    return (
        <div>
            <Navbar />
            <Header />
            <BestSell />
            {/* <ProductForm /> */}
            {/* <CreateProduct />
            <AllProduct />
            <RegisterForm />
            <LoginForm /> */}
            <BestProduct param={params.id} />
            <Footer />
        </div>
    )
}

export default page
