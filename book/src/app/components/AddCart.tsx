"use client"
import { getBooksFromLocalStorage } from '@/libs/localStorage';
import React, { useEffect } from 'react'

const AddCart = () => {

    useEffect(() => {

        const retrievedBooks = getBooksFromLocalStorage('savedData');
        console.log(retrievedBooks);
    })
    return (
        <div>

        </div>
    )
}

export default AddCart
