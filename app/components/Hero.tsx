'use client';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/pagination'; 
import { Autoplay, Pagination } from 'swiper/modules';
import { BannerImage } from 'D:/intern-ecommerce-project/models/banner';

export const homePageData = {
  storeBanners: [
    {
      link: '',
      url: `https://${process.env.NEXT_PUBLIC_CDN_ADDRESS}/store-1099/product-images/1701411106452-imagecropper1701411102843jpg`,
      id: '863',
      isMobile: true,
      isDesktop: true,
    },
    {
      link: '',
      url: `https://${process.env.NEXT_PUBLIC_CDN_ADDRESS}/store-1099/product-images/1701411120961-imagecropper1701411118789jpg`,
      id: '864',
      isMobile: true,
      isDesktop: true,
    },
    {
      link: '',
      url: `https://${process.env.NEXT_PUBLIC_CDN_ADDRESS}/store-1099/product-images/1701411126419-imagecropper1701411124610jpg`,
      id: '865',
      isMobile: true,
      isDesktop: true,
    },
  ] as BannerImage[],
};

export default function Hero() {
  return (
    <>
      <style jsx>{`
        .swiper-pagination {
          text-align:left;
          position:relative;
          user-select:none;
          width:auto;
          outline:none;
          transition:0.3s;
          z-index:10;
        }
        .swiper-pagination-bullets{
            font-size:0;
        }

      `}</style>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
        modules={[Autoplay, Pagination]}
        className="max-w-[-webkit-fill-available]"
        style={{ height: '100vh' }}
      >
        {homePageData.storeBanners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="bg-[#fce9d1] min-h-screen flex flex-col justify-center items-center p-8 md:flex-row md:items-center relative">
              <div className="md:w-1/2 flex flex-col mb-[auto] items-center mt-[159px] mx-w-[600px] justify-center z-[2] text-left">
                {/* <h2 className="text-sm font-semibold text-zinc-800">NEW COLLECTION</h2>
                <h1 className="text-5xl font-bold text-zinc-900 mt-2">Luxury Without Labels</h1>
                <p className="text-lg text-zinc-700 mt-4">Explore new-in products and future bestsellers.</p>
                <button className="mt-6 px-6 py-3 bg-black text-white font-semibold rounded-md">View Collection</button> */}
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
                <Image
                  src={banner.url}
                  alt={`Fashion Model ${banner.id}`}
                  height={500}
                  width={500}
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
