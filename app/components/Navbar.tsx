'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Widget() {
  // const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 0) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <div className={`fixed top-0 left-0 w-full flex justify-center items-center z-50 transition-all duration-300 h-[74px] bg-[#fce9d1]`}>
      <nav className='max-w-[1200px] 2xl:max-w-[1440px] mx-auto flex justify-center w-full items-center'>
        <div className="flex justify-between items-center w-full">
          {/* Logo Container */}
          <div className="flex items-center w-[20%] justify-center">
            <Image src="https://july.uxper.co/fashion01/wp-content/uploads/sites/2/2022/04/logo-july-dark-1-20220704-030304.svg" alt="logo" width={150} height={300} style={{ width: "auto", height: "100%" }} />
          </div>
          
          {/* Links Container */}
          <div className="hidden md:flex items-start space-x-8 justify-start w-[50%]">
            {['Home', 'Shop', 'Pages', 'Blog', 'Features'].map((item) => (
              <div
                key={item}
                className="text-black font-normal text-[1rem] cursor-pointer font-primary"
              >
                {item}
              </div>
            ))}
          </div>
          
          {/* Icons Container */}
          <div className="hidden md:flex items-center justify-end space-x-4 cursor-pointer w-[30%]">
          <svg
                     width="28"
                     height="28"
                     viewBox="0 0 28 28"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                   >
                     <path
                       d="M20.031 18.617L24.314 22.899L22.899 24.314L18.617 20.031C17.0237 21.3082 15.042 22.0029 13 22C8.032 22 4 17.968 4 13C4 8.032 8.032 4 13 4C17.968 4 22 8.032 22 13C22.0029 15.042 21.3082 17.0237 20.031 18.617ZM18.025 17.875C19.2941 16.5699 20.0029 14.8204 20 13C20 9.132 16.867 6 13 6C9.132 6 6 9.132 6 13C6 16.867 9.132 20 13 20C14.8204 20.0029 16.5699 19.2941 17.875 18.025L18.025 17.875Z"
                       fill="#111111"
                     ></path>
                   </svg>
          <div className="rounded-full p-2 cursor-pointer">
          <svg
                     width="28"
                     height="28"

                     viewBox="0 0 28 28"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                   >
                     <path
                       d="M6 24C6 21.8783 6.84285 19.8434 8.34315 18.3431C9.84344 16.8429 11.8783 16 14 16C16.1217 16 18.1566 16.8429 19.6569 18.3431C21.1571 19.8434 22 21.8783 22 24H20C20 22.4087 19.3679 20.8826 18.2426 19.7574C17.1174 18.6321 15.5913 18 14 18C12.4087 18 10.8826 18.6321 9.75736 19.7574C8.63214 20.8826 8 22.4087 8 24H6ZM14 15C10.685 15 8 12.315 8 9C8 5.685 10.685 3 14 3C17.315 3 20 5.685 20 9C20 12.315 17.315 15 14 15ZM14 13C16.21 13 18 11.21 18 9C18 6.79 16.21 5 14 5C11.79 5 10 6.79 10 9C10 11.21 11.79 13 14 13Z"
                       fill="#111111"
                     ></path>
                   </svg>
          </div>
          <div className="rounded-full p-2 cursor-pointer">
          <svg
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                   >
                     <path
                       d="M12.001 4.52898C14.35 2.41998 17.98 2.48998 20.243 4.75698C22.505 7.02498 22.583 10.637 20.479 12.993L11.999 21.485L3.52101 12.993C1.41701 10.637 1.49601 7.01898 3.75701 4.75698C6.02201 2.49298 9.64501 2.41698 12.001 4.52898ZM18.827 6.16998C17.327 4.66798 14.907 4.60698 13.337 6.01698L12.002 7.21498L10.666 6.01798C9.09101 4.60598 6.67601 4.66798 5.17201 6.17198C3.68201 7.66198 3.60701 10.047 4.98001 11.623L12 18.654L19.02 11.623C20.394 10.048 20.318 7.66398 18.827 6.16998Z"
                       fill="#111111"
                     ></path>
                   </svg>
          </div>
          <div className="rounded-full cursor-pointer">
            <a href="#" className="relative flex text-[#111111] hover:text-[#e4b478]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M7 8V6C7 4.67392 7.52678 3.40215 8.46447 2.46447C9.40215 1.52678 10.6739 1 12 1C13.3261 1 14.5979 1.52678 15.5355 2.46447C16.4732 3.40215 17 4.67392 17 6V8H20C20.2652 8 20.5196 8.10536 20.7071 8.29289C20.8946 8.48043 21 8.73478 21 9V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V9C3 8.73478 3.10536 8.48043 3.29289 8.29289C3.48043 8.10536 3.73478 8 4 8H7ZM7 10H5V20H19V10H17V12H15V10H9V12H7V10ZM9 8H15V6C15 5.20435 14.6839 4.44129 14.1213 3.87868C13.5587 3.31607 12.7956 3 12 3C11.2044 3 10.4413 3.31607 9.87868 3.87868C9.31607 4.44129 9 5.20435 9 6V8Z" fill="#111111"></path>
             </svg>
                 </a>
                 {/* <span className="absolute block top-[1.5rem] right-[10rem] h-[16px] min-w-[16px] text-[10px] font-bold bg-[#111111] text-[#ffffff] leading-[16px] text-center p-[0 0.3em] rounded-[50%]">
                  0
                 </span> */}
          </div>
        </div>
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-black focus:outline-none"
            >
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 7H20M4 12H20M4 17H20"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col items-center bg-white/90 backdrop-blur-md p-4 space-y-2">
            {['Home','Shop','Blog','Pages','Feature'].map((item) => (
              <div
                key={item}
                className="text-black font-bold text-[1rem] cursor-pointer hover:text-orange-500 transition-colors duration-200 ease-in font-primary"
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
}