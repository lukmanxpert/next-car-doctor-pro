import React from 'react'
import logInImage from "../../../../../public/assets/images/login/login.svg"
import Image from 'next/image'
import RegisterForm from './components/RegisterForm'

export default function Register() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 place-items-center gap-4 p-8 my-4'>
            <div className='col-span-1 hidden md:block'>
                <Image src={logInImage} height={500} width={460} alt='login image' />
            </div>
            <div className='col-span-1 w-full'>
                <RegisterForm />
            </div>
        </div>
    )
}