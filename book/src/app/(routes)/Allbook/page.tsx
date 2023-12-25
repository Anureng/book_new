import FilterProduct from '@/app/components/FilterProduct'
import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import React, { useState } from 'react'



const page = async () => {



    return (
        <div>
            <Navbar />
            <FilterProduct />
            <Footer />
        </div>
    )
}

export default page
