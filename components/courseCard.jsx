"use client"
import React from 'react'
import Image from "next/image";

function courseCard(index) {
    return (
        <div className="border rounded-md border-gray-500 w-96 mx-4 my-4 flex flex-col items-center" key={index.id}>
            <Image
                className="rounded-md"
                src={index.image_link}
                width={500}
                height={500}
                placeholder="image"
            />
            <h1 className="my-3 font-bold text-base">{index.course_name}</h1>

            <p className="font-semibold text-sm">{index.description}</p>
        </div>

    )
}

export default courseCard