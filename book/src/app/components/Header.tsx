import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div className='  bg-gray-200 h-[40rem] p-2 flex flex-col sm:flex-row  items-center justify-center' >
            <div className='space-y-6'>
                <p className='text-5xl text-red-500'>Read More</p>
                <p className='text-4xl'>Learn More</p>
                <p className='text-xl'>In this web app you can buy book or read the book</p>
                <button className='bg-red-500 text-white px-1 py-2 rounded-xl'>Get Started</button>
            </div>
            <div>
                {/* <Image src={"https://unsplash.com/photos/assorted-books-on-wooden-table-eMP4sYPJ9x0"} alt='Home Image' width={400} height={400} /> */}
            </div>
        </div>
    )
}

export default Header