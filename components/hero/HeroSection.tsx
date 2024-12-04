import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
    return (
        <div className="bg-[#043873] text-[#FFFFFF] py-20 px-6 md:py-[140px] md:px-[80px] lg:px-[220px]">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
                {/* Text Section */}
                <div className="flex flex-col gap-y-5 text-center lg:text-left">
                    <h2 className="font-bold text-[32px] md:text-[48px] lg:text-[64px] leading-snug md:leading-[58px] lg:leading-[77.45px]">
                        Get More Done with whitespace
                    </h2>
                    <p className="text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed">
                        Project management software that enables your teams to collaborate, plan, analyze, and manage everyday tasks.
                    </p>
                    <button className="w-fit mx-auto lg:mx-0 bg-[#4F9CF9] rounded-[8px] py-4 px-6 flex items-center gap-2 text-[14px] md:text-[16px]">
                        <div>Try Whitespace free</div>
                        <Image src="/rightArrow.svg" alt="" width={10} height={10} />
                    </button>
                </div>

                {/* Image Section */}
                <div className="w-full max-w-[824px]">
                    <Image
                        src="/Image-container.png"
                        alt="Hero Image"
                        width={824}
                        height={549}
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
