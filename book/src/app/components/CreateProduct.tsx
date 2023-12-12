"use client"
import React, { useState } from 'react'
import { CldUploadButton, CldUploadWidgetResults } from 'next-cloudinary';
const CreateProduct = () => {

    const [imageUrl, setImageUrl] = useState<string>("")
    const handleUploadImage = (result: CldUploadWidgetResults) => {
        const info = result.info as object;
        if ("public_id" in info && "secure_url" in info) {
            setImageUrl(info.secure_url as string)
        }
    }
    return (
        <div>
            <CldUploadButton uploadPreset="qlvvng0p" onUpload={handleUploadImage} >
                Click to upload
            </CldUploadButton>
        </div>
    )
}

export default CreateProduct
