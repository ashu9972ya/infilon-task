import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#043873] text-[#FFFFFF]  px-[220px] mb-8">
      <div className="grid grid-cols-1 md:grid-cols-6 ">
        {/* Left Section - Logo and Description */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-x-[10px]">
            <Image src={'/Group.svg'} alt="" width={37} height={29} />
            <h2 className="text-3xl font-bold">whitepace</h2>
          </div>
          <p className="max-w-60 font-normal text-lg mt-4 text-[#F7F7EE] text-wrap">
            whitepace was created for the new ways we live and work. We make a better workspace around the world
          </p>
        </div>

        {/* Product Links */}
        <div>
          <h3 className="font-semibold text-lg">Product</h3>
          <ul className="mt-4 space-y-2 text-base">
            <li>
              <Link href="#" className="hover:text-white">Overview</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">Pricing</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">Customer stories</Link>
            </li>
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h3 className="font-semibold text-lg">Resources</h3>
          <ul className="mt-4 space-y-2 text-base ">
            <li>
              <Link href="#" className="hover:text-white">Blog</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">Guides & tutorials</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">Help center</Link>
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-semibold text-lg">Company</h3>
          <ul className="mt-4 space-y-2 text-base ">
            <li>
              <Link href="#" className="hover:text-white">About us</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">Careers</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">Media kit</Link>
            </li>
          </ul>
        </div>

        {/* Call-to-Action */}
        <div className="flex flex-col gap-y-[23px]">
          <h3 className="font-semibold text-lg">Try It Today</h3>
          <p className=" text-sm">
            Get started for free. Add your whole team as your needs grow.
          </p>
          <button className='w-fit bg-[#4F9CF9] rounded-[8px] py-5 px-10 flex items-center gap-1'>
            <div className="font-normal text-base">Start Today</div>
            <Image src={'/rightArrow.svg'} alt='' width={10} height={10} />
          </button>
        </div>
      </div>

      {/* Footer Bottom Links */}
      <div className="border-t pb-8 border-[#2E4E73] mt-8 pt-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm ">
          {/* Left Links */}
          <div className="space-x-4 flex gap-x-[60px]">
           <div className="flex items-center gap-x-[6px] ">
           <Image src={'/browser.svg'} alt="" height={19} width={19} />
            <Link href="#" className="hover:text-white flex items-center">
              English
            </Link>
            <Image src={'/downArrow.svg'} alt="" width={20} height={14} />
           </div>
            <Link href="#" className="hover:text-white">Terms & privacy</Link>
            <Link href="#" className="hover:text-white">Security</Link>
            <Link href="#" className="hover:text-white">Status</Link>
            <p className="mt-4 md:mt-0">©2021 Whitepace LLC.</p>
          </div>

          {/* Copyright */}
        

          {/* Social Icons */}
          <div className="mt-4 md:mt-0 space-x-[47px] flex items-center">
            <Link href="#" className="hover:text-white">
            <Image src={'/facebook.svg'} alt="" width={9} height={16.68}/>
            </Link>
            <Link href="#" className="hover:text-white">
            <Image src={'/twitter.svg'} alt="" width={17} height={13.81}/>
            </Link>
            <Link href="#" className="hover:text-white">
            <Image src={'/linkedin.svg'} alt="" width={15} height={15}/>            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
