"use client"
import React, { useEffect } from 'react'
import bannerImage1 from '../../../public/assets/images/banner/1.jpg'
import bannerImage2 from '../../../public/assets/images/banner/2.jpg'
import bannerImage3 from '../../../public/assets/images/banner/3.jpg'
import bannerImage4 from '../../../public/assets/images/banner/4.jpg'
import bannerImage5 from '../../../public/assets/images/banner/5.jpg'
import bannerImage6 from '../../../public/assets/images/banner/6.jpg'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

export default function Banner() {
  const images = [bannerImage1, bannerImage2, bannerImage3, bannerImage4, bannerImage5, bannerImage6];
  const [current, setCurrent] = React.useState(4);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
  }, [])

  return (
    <div className="relative w-full mx-auto">
      <div className="overflow-hidden">
        <Image
          src={images[current]}
          alt={`Banner ${current + 1}`}
          className="w-full transition brightness-50 md:h-[calc(100vh-4rem)] object-center "
          priority
        />
      </div>
      <div className='absolute top-16 left-16 text-white space-y-6'>
        <div className='leading-16'>
          <h1 className='text-6xl font-semibold leading-16'>Affordable</h1>
          <h1 className='text-6xl font-semibold leading-16'>Price For Car</h1>
          <h1 className='text-6xl font-semibold leading-16'>Servicing</h1>
        </div>
        {/* <h1 className='capitalize text-6xl font-semibold leading-16'>Affordable <br /> price for car <br /> servicing</h1> */}
        <p className='text-gray-300'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
        <div className='flex gap-4 items-center'>
          <button className='bg-primary-100 rounded text-white cursor-pointer py-2 px-3 font-semibold'>Discover More</button>
          <button className='shadow-[inset_0_0_0_2px_] bg-transparent cursor-pointer rounded py-2 px-3 font-semibold'>Latest Project</button>
        </div>
      </div>
      <div className='absolute right-5 bottom-5 flex gap-6 items-center justify-between px-4 md:px-8'>
        <button onClick={prevSlide} title='back' className='bg-primary-100 cursor-pointer p-2 rounded-full' aria-label="Previous Slide">
          <FaArrowLeft size={20} className="text-white hover:scale-125 transition" />
        </button>
        <button onClick={nextSlide} className='bg-primary-100 cursor-pointer p-2 rounded-full' aria-label="Next Slide">
          <FaArrowRight size={20} title='next' className="text-white hover:scale-125 transition" />
        </button>
      </div>
    </div>
  );
}