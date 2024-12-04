import Image from 'next/image'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
    return (
        <header className='py-4 bg-[#043873] text-[#FFFFFF]'>
            <div className='flex justify-around item-center'>
                <div className='flex gap-[10px] items-center'>
                    <Image src={'/Group.svg'} alt='' width={37} height={29} />
                    <div className='font-bold text-[28px] text-[#FFFFFF]'>
                        whitepace
                    </div>
                </div>
                <div className='flex items-center gap-x-8'>
                    <nav className='text-[#FFFFFF]'>
                        <ul className='flex gap-x-8 items-center'>
                            <li className='flex items-center'>
                                <div>Products</div>
                                <Image src={'/downArrow.svg'} alt='' width={29} height={24} />
                            </li>
                            <li className='flex items-center'>
                                <div>Products</div>
                                <Image src={'/downArrow.svg'} alt='' width={29} height={24} />
                            </li>
                            <li className='flex items-center'>
                                <div>Products</div>
                                <Image src={'/downArrow.svg'} alt='' width={29} height={24} />
                            </li>
                            <li className='flex items-center'>
                                <div>Products</div>
                                <Image src={'/downArrow.svg'} alt='' width={29} height={24} />
                            </li>

                        </ul>
                    </nav>
                    <div className='flex items-center gap-x-6'>
                        <button className='bg-[#FFE492] text-[#043873] font-medium py-4 px-10  rounded-[8px]'>
                            Login
                        </button>
                        <button className='bg-[#4F9CF9] rounded-[8px] py-4 px-6 flex items-center gap-1'>
                            <div>Try Whitespace free</div>
                            <Image src={'/rightArrow.svg'} alt='' width={10} height={10} />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header