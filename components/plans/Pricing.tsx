import Image from "next/image";
import React from "react";

const Pricing = () => {
  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Free Plan */}
          <div className="bg-white border border-gray-300 rounded-lg shadow-sm p-6 text-left flex flex-col">
            <h3 className="text-lg font-semibold">Free</h3>
            <p className="text-4xl font-bold  mt-4">$0</p>
            <p className=" mt-2">Capture ideas and find them quickly</p>
            <ul className="mt-6 space-y-4 flex-grow">
              <li className="flex items-center gap-x-[19px]">
                <Image src={'/tickmark.svg'} alt="" height={18.01} width={18.01} />
                <p> Sync unlimited devices</p></li>
              <li className="flex items-center gap-x-[19px]">
                <Image src={'/tickmark.svg'} alt="" height={18.01} width={18.01} />
                <p> 10 GB monthly uploads</p></li>
              <li className="flex items-center gap-x-[19px]">
                <Image src={'/tickmark.svg'} alt="" height={18.01} width={18.01} />
                <p> 200 MB max. note size</p></li>
              <li className="flex items-center gap-x-[19px]">
                <Image src={'/tickmark.svg'} alt="" height={18.01} width={18.01} />
                <p>Customize Home dashboard and access extra widgets</p></li>
              <li className="flex items-center gap-x-[19px]">
                <Image src={'/tickmark.svg'} alt="" height={18.01} width={18.01} />
                <p>Connect primary Google Calendar account</p></li>
              <li className="flex items-center gap-x-[19px]">
                <Image src={'/tickmark.svg'} alt="" height={18.01} width={18.01} />
                <p> Add due dates, reminders, and notifications to your tasks</p></li>
            </ul>
            <button className="mt-6 w-fit border border-[#FFE492] bg-[#FFFFFF]  py-2 px-4 rounded">
              Get Started
            </button>
          </div>

          {/* Personal Plan */}
          <div className="bg-[#043873] text-white rounded-lg shadow-lg p-6 text-center transform md:scale-110 flex flex-col">
            <h3 className="text-lg font-semibold">Personal</h3>
            <p className="text-4xl font-bold mt-4">$11.99</p>
            <p className="mt-2">Keep home and family on track</p>
            <ul className="mt-6 space-y-4 flex-grow">
              <li className="flex items-center gap-x-[19px]">
                <Image src={'/tickmarkwhite.svg'} alt="" height={18.01} width={18.01} />
                <p> Sync unlimited devices</p></li>
              <li className="flex items-center gap-x-[19px]">
                <Image src={'/tickmarkwhite.svg'} alt="" height={18.01} width={18.01} />
                <p> 10 GB monthly uploads</p></li>
              <li className="flex items-center gap-x-[19px]">
                <Image src={'/tickmarkwhite.svg'} alt="" height={18.01} width={18.01} />
                <p> 200 MB max. note size</p></li>
              <li className="flex items-center gap-x-[19px]">
                <Image src={'/tickmarkwhite.svg'} alt="" height={18.01} width={18.01} />
                <p>Customize Home dashboard and access extra widgets</p></li>
              <li className="flex items-center gap-x-[19px]">
                <Image src={'/tickmarkwhite.svg'} alt="" height={18.01} width={18.01} />
                <p>Connect primary Google Calendar account</p></li>
              <li className="flex items-center gap-x-[19px]">
                <Image src={'/tickmarkwhite.svg'} alt="" height={18.01} width={18.01} />
                <p> Add due dates, reminders, and notifications to your tasks</p></li>
            </ul>
            <button className="mt-6 w-fit bg-[#4F9CF9] text-[#FFFFFF] py-2 px-4 rounded hover:bg-gray-200">
              Get Started
            </button>
          </div>

          {/* Organization Plan */}
          <div className="bg-white  border border-gray-300 rounded-lg shadow-sm p-6 text-left flex flex-col">
            <h3 className="text-lg font-semibold text-gray-700">Organization</h3>
            <p className="text-4xl font-bold text-gray-800 mt-4">$49.99</p>
            <p className="text-gray-500 mt-2">Capture ideas and find them quickly</p>
            <ul className="mt-6 space-y-4  flex-grow">
              <li className="flex items-center gap-x-[19px]">
                <Image src={'/tickmark.svg'} alt="" height={18.01} width={18.01} />
                <p> Sync unlimited devices</p></li>
              <li className="flex items-center gap-x-[19px]">
                <Image  src={'/tickmark.svg'} alt="" height={18.01} width={18.01} />
                <p> 10 GB monthly uploads</p></li>
              <li className="flex items-center gap-x-[19px]">
                <Image src={'/tickmark.svg'} alt="" height={18.01} width={18.01} />
                <p> 200 MB max. note size</p></li>
              <li className="flex items-center gap-x-[19px]">
                <Image src={'/tickmark.svg'} alt="" height={18.01} width={18.01} />
                <p>Customize Home dashboard and access extra widgets</p></li>
              <li className="flex items-center gap-x-[19px]">
                <Image src={'/tickmark.svg'} alt="" height={18.01} width={18.01} />
                <p>Connect primary Google Calendar account</p></li>
              <li className="flex items-center gap-x-[19px]">
                <Image src={'/tickmark.svg'} alt="" height={18.01} width={18.01} />
                <p> Add due dates, reminders, and notifications to your tasks</p></li>
            </ul>
            <button className="mt-6 w-fit border border-[#FFE492] bg-[#FFFFFF]  py-2 px-4 rounded">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
