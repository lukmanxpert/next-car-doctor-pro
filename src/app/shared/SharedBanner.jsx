import Image from 'next/image';
import React from 'react';
import bannerImage from "../../../public/assets/images/checkout/checkout.png"

export default function SharedBanner({ title, route }) {
    return (
        <div className="relative w-full mx-auto rounded-lg overflow-hidden mt-4">
            {/* Background Image */}
            <div className="relative w-full h-[200px] md:h-[300px]">
                <Image
                    src={bannerImage}
                    alt="shared banner"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                    priority
                />
            </div>

            {/* Gradient overlay + title */}
            <div className="absolute inset-0 flex items-center px-6 md:px-12 bg-gradient-to-r from-black/80 via-black/50 to-transparent">
                <h1 className="text-white text-2xl md:text-4xl font-bold">{title}</h1>
            </div>

            {/* Red route ribbon centered horizontally */}
            <div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-10 px-6 flex items-center text-white text-sm md:text-base font-medium bg-primary-100 shadow-md"
                style={{
                    clipPath: 'polygon(20px 0%, 100% 0%, 100% 100%, 0% 100%)',
                }}
            >
                {route}
            </div>
        </div>
    );
}