import Image from 'next/image'
import React from 'react'

type Props = {}

const Contact = (props: Props) => {
    return (
        <section className='bg-[#043873] text-[#FFFFFF] py-[140px] px-[220px]'>
            <div className='flex flex-col gap-y-10 items-center justify-center'>
                <div className='flex flex-col gap-y-6'>
                    <h1 className='font-bold text-7xl'>
                        Try Whitepace today
                    </h1>
                    <p className='text-center font-normal text-2xl'>
                        Get started for free.
                        Add your whole team as your needs grow.
                    </p>
                </div>
                <div className='flex flex-col gap-y-10 items-center justify-center'>
                    <button className='w-fit  bg-[#4F9CF9] rounded-[8px] py-4 px-6 flex items-center gap-1'>
                        <div className='font-medium text-base'>Try Taskey free</div>
                        <Image src={'/rightArrow.svg'} alt='' width={10} height={10} />
                    </button>
                    <p className='font-normal text-2xl'>On a big team? Contact sales</p>
                    <div className='flex gap-x-10'>
                        <Image src={'/apple.svg'} alt='' width={48.94} height={60}/>
                        <Image src={'/window.svg'} alt='' width={48.94} height={60}/>
                        <Image src={'/andriod.svg'} alt='' width={48.94} height={60}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact