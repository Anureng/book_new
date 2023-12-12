import BestSell from '@/app/components/BestSell'
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
        </div>
    )
}

export default page
