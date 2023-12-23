import AllProduct from '@/app/components/AllProduct'
import BestSell from '@/app/components/BestSell'
import CreateProduct from '@/app/components/CreateProduct'
import ProductForm from '@/app/components/CreateProduct'
import Header from '@/app/components/Header'
import LoginForm from '@/app/components/LoginForm'
import Navbar from '@/app/components/Navbar'
import RegisterForm from '@/app/components/RegisterForm'
import React from 'react'

const page = () => {
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
        </div>
    )
}

export default page
