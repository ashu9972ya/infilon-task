import Image from 'next/image'
import React from 'react'


const HeroSection = () => {
    return (
        <div className='bg-[#043873] text-[#FFFFFF]  py-[140px] px-[220px]'>
            <div className='flex justify-center items-center'>
                <div className='flex flex-col gap-y-5'>
                    <div>
                        <h2 className='font-bold text-[64px] leading-[77.45px]'>Get More Done with whitepace</h2>
                        <div>
                            Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
                        </div>

                    </div>
                    <button className='w-fit bg-[#4F9CF9] rounded-[8px] py-4 px-6 flex items-center gap-1'>
                        <div>Try Whitespace free</div>
                        <Image src={'/rightArrow.svg'} alt='' width={10} height={10} />
                    </button>
                </div>
                <div>
                    <Image src={'/Image-container.png'} alt='' width={824} height={549}
                    />
                </div>
            </div>
        </div>
    )
}

export default HeroSection