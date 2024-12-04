'use client'
import Image from 'next/image';
import React, { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="py-4 bg-[#043873] text-[#FFFFFF]">
            <div className="flex justify-between items-center px-4 md:px-8">
                <div className="flex gap-2 items-center">
                    <Image src="/Group.svg" alt="Logo" width={37} height={29} />
                    <div className="font-bold text-[20px] md:text-[28px] text-[#FFFFFF]">
                        whitespace
                    </div>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    <nav className="text-[#FFFFFF]">
                        <ul className="flex gap-6 items-center">
                            {['Products', 'Solutions', 'Resources', 'Pricing'].map((item, index) => (
                                <li key={index} className="flex items-center">
                                    <div>{item}</div>
                                    <Image src="/downArrow.svg" alt="" width={15} height={12} />
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="flex items-center gap-6">
                        <button className="bg-[#FFE492] text-[#043873] font-medium py-2 px-4 rounded-[8px]">
                            Login
                        </button>
                        <button className="bg-[#4F9CF9] rounded-[8px] py-2 px-4 flex items-center gap-1">
                            <div>Try Whitespace free</div>
                            <Image src="/rightArrow.svg" alt="" width={10} height={10} />
                        </button>
                    </div>
                </div>

                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
                        <Image src="/burger.svg" alt="Menu" width={24} height={24} />
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-[#043873] text-[#FFFFFF] p-4">
                    <nav>
                        <ul className="flex flex-col gap-4">
                            {['Products', 'Solutions', 'Resources', 'Pricing'].map((item, index) => (
                                <li key={index} className="flex items-center">
                                    <div>{item}</div>
                                    <Image src="/downArrow.svg" alt="" width={15} height={12} />
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="mt-4 flex flex-col gap-4">
                        <button className="w-fit bg-[#FFE492] text-[#043873] font-medium py-2 px-4 rounded-[8px]">
                            Login
                        </button>
                        <button className="w-fit bg-[#4F9CF9] rounded-[8px] py-2 px-4 flex items-center gap-1">
                            <div>Try Whitespace free</div>
                            <Image src="/rightArrow.svg" alt="" width={10} height={10} />
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
