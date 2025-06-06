import Image from 'next/image'
import React from 'react'
import parts from '../../../public/assets/images/about_us/parts.jpg'
import person from '../../../public/assets/images/about_us/person.jpg'

export default function AboutUs() {
    return (
        <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-4 md:gap-12 mt-10'>
            <div className='flex-1'>
                <div className='relative h-[300px] md:h-[500px] pr-20'>
                    <Image className='rounded' src={person} alt='about-us-person-image'></Image>
                    <div className='absolute bottom-0 right-0 w-[280px] md:w-[350px]'>
                        <Image className='border-t-8 border-l-8 border-white' src={parts} alt='about-us-parts-image'></Image>
                    </div>
                </div>
            </div>
            <div className='flex-1 text-left'>
                <h1 className='text-primary-100 font-semibold text-lg'>About Us</h1>
                <h2 className='text-3xl font-bold'>We are qualified <br /> & of experience <br /> in this field</h2>
                <p className='text-[#737373] md:pr-10 my-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p className='text-[#737373] md:pr-10 pr-4'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
        </div>
    )
}
