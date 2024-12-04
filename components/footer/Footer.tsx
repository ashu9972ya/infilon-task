import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#043873] text-[#FFFFFF] px-6 md:px-[80px] lg:px-[220px] py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-y-8 md:gap-y-0">
        {/* Left Section - Logo and Description */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-x-2 md:gap-x-[10px]">
            <Image src={'/Group.svg'} alt="Logo" width={37} height={29} />
            <h2 className="text-2xl md:text-3xl font-bold">whitepace</h2>
          </div>
          <p className="text-sm md:text-base font-normal mt-4 text-[#F7F7EE] max-w-[300px]">
            whitepace was created for the new ways we live and work. We make a better workspace around the world.
          </p>
        </div>

        {/* Product Links */}
        <div>
          <h3 className="font-semibold text-base md:text-lg">Product</h3>
          <ul className="mt-4 space-y-2 text-sm md:text-base">
            <li><Link href="#" className="hover:text-white">Overview</Link></li>
            <li><Link href="#" className="hover:text-white">Pricing</Link></li>
            <li><Link href="#" className="hover:text-white">Customer stories</Link></li>
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h3 className="font-semibold text-base md:text-lg">Resources</h3>
          <ul className="mt-4 space-y-2 text-sm md:text-base">
            <li><Link href="#" className="hover:text-white">Blog</Link></li>
            <li><Link href="#" className="hover:text-white">Guides & tutorials</Link></li>
            <li><Link href="#" className="hover:text-white">Help center</Link></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-semibold text-base md:text-lg">Company</h3>
          <ul className="mt-4 space-y-2 text-sm md:text-base">
            <li><Link href="#" className="hover:text-white">About us</Link></li>
            <li><Link href="#" className="hover:text-white">Careers</Link></li>
            <li><Link href="#" className="hover:text-white">Media kit</Link></li>
          </ul>
        </div>

        {/* Call-to-Action */}
        <div className="flex flex-col gap-y-4">
          <h3 className="font-semibold text-base md:text-lg">Try It Today</h3>
          <p className="text-xs md:text-sm">
            Get started for free. Add your whole team as your needs grow.
          </p>
          <button className="w-fit bg-[#4F9CF9] rounded-[8px] py-3 px-6 md:py-4 md:px-10 flex items-center gap-1">
            <div className="font-normal text-sm md:text-base">Start Today</div>
            <Image src={'/rightArrow.svg'} alt="Right Arrow" width={10} height={10} />
          </button>
        </div>
      </div>

      {/* Footer Bottom Links */}
      <div className="border-t border-[#2E4E73] mt-8 pt-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm space-y-4 md:space-y-0">
          {/* Left Links */}
          <div className="flex flex-col md:flex-row md:space-x-4 gap-y-4 md:gap-y-0">
            <div className="flex items-center gap-x-2">
              <Image src={'/browser.svg'} alt="Browser" height={19} width={19} />
              <Link href="#" className="hover:text-white">English</Link>
              <Image src={'/downArrow.svg'} alt="Down Arrow" width={20} height={14} />
            </div>
            <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-6">
              <Link href="#" className="hover:text-white">Terms & privacy</Link>
              <Link href="#" className="hover:text-white">Security</Link>
              <Link href="#" className="hover:text-white">Status</Link>
              <p>©2021 Whitepace LLC.</p>

            </div>
          </div>

          {/* Copyright */}

          {/* Social Icons */}
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-white">
              <Image src={'/facebook.svg'} alt="Facebook" width={9} height={16.68} />
            </Link>
            <Link href="#" className="hover:text-white">
              <Image src={'/twitter.svg'} alt="Twitter" width={17} height={13.81} />
            </Link>
            <Link href="#" className="hover:text-white">
              <Image src={'/linkedin.svg'} alt="LinkedIn" width={15} height={15} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
