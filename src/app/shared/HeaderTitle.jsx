import React from 'react'

export default function HeaderTitle({ name, title, desc1, desc2 }) {
    return (
        <div className='text-center'>
            <h1 className='text-xl font-bold text-primary-100'>{name}</h1>
            <h2 className='text-5xl font-bold '>{title}</h2>
            <p className='text-[#737373] text-base mt-2'>{desc1}</p>
            <p className='text-[#737373] text-base'>{desc2}</p>
        </div>
    )
}
