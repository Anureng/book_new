import BestSell from '@/app/components/BestSell'
import CreateProduct from '@/app/components/CreateProduct'
import ProductForm from '@/app/components/CreateProduct'
import Header from '@/app/components/Header'
import Navbar from '@/app/components/Navbar'
import React from 'react'

const page = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <BestSell />
            <ProductForm />
            <CreateProduct />
        </div>
    )
}

export default page
