import React from 'react'
import Pricing from './Pricing'


const Plans = () => {
    return (
        <section className='py-[140px] px-[220px]'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='font-bold text-7xl text-[#212529]'>Choose Your Plan</h1>
                <p className='font-normal text-[18px] leading-[30px]'>
                    Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.
                </p>
            </div>
            <Pricing/>
        </section>
    )
}

export default Plans