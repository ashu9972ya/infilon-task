import Image from 'next/image';
import React from 'react';

const Contact = () => {
    return (
        <section className="bg-[#043873] text-[#FFFFFF] py-[80px] md:py-[140px] px-6 md:px-[80px] lg:px-[220px]">
            <div className="flex flex-col gap-y-8 md:gap-y-10 items-center justify-center">
                <div className="flex flex-col gap-y-4 md:gap-y-6 text-center">
                    <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl">
                        Try Whitepace today
                    </h1>
                    <p className="font-normal text-lg md:text-xl lg:text-2xl">
                        Get started for free. Add your whole team as your needs grow.
                    </p>
                </div>
                <div className="flex flex-col gap-y-8 md:gap-y-10 items-center justify-center">
                    <button className="w-fit bg-[#4F9CF9] rounded-[8px] py-3 px-5 md:py-4 md:px-6 flex items-center gap-2">
                        <div className="font-medium text-sm md:text-base">Try Taskey free</div>
                        <Image src={'/rightArrow.svg'} alt="Right Arrow" width={10} height={10} />
                    </button>
                    <p className="font-normal text-lg md:text-xl lg:text-2xl">
                        On a big team? Contact sales
                    </p>
                    <div className="flex gap-x-4 md:gap-x-6 lg:gap-x-10">
                        <Image src={'/apple.svg'} alt="Apple" width={36} height={45} className="w-10 md:w-12" />
                        <Image src={'/window.svg'} alt="Windows" width={36} height={45} className="w-10 md:w-12" />
                        <Image src={'/andriod.svg'} alt="Android" width={36} height={45} className="w-10 md:w-12" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
