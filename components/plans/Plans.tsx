import React from 'react';
import Pricing from './Pricing';

const Plans = () => {
    return (
        <section className="py-12 px-6 md:py-[140px] md:px-[80px] lg:px-[220px]">
            <div className="flex flex-col items-center text-center gap-4">
                <h1 className="font-bold text-3xl md:text-5xl lg:text-7xl text-[#212529]">
                    Choose Your Plan
                </h1>
                <p className="font-normal text-[16px] md:text-[18px] leading-[24px] md:leading-[30px] text-gray-700">
                    Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.
                </p>
            </div>
            <Pricing />
        </section>
    );
};

export default Plans;
