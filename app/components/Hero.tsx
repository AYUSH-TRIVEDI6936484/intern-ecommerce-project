'use client';
import Image from 'next/image';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Autoplay, Pagination} from 'swiper/modules';
import { homePageData } from '@/data/homepage';
import { BannerImage } from '@/models/banner';

export default function Hero() {
  return (
    <>
      <style jsx>{`
        .swiper-pagination {
          text-align: left;
          position: relative;
          user-select: none;
          width: auto;
          outline: none;
          transition: 0.3s;
          z-index: 10;
        }
        .swiper-pagination-bullets {
          font-size: 0;
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
        pagination={{clickable: true}}
        loop={true}
        modules={[Autoplay, Pagination]}
        className="max-w-[-webkit-fill-available]"
        style={{height: '100vh'}}
      >
        {homePageData.storeBanners.map((banner : BannerImage) => (
          <SwiperSlide key={banner.id}>
            <div className="bg-[#fce9d1] min-h-screen flex flex-col justify-center items-center p-8 md:flex-row md:items-center relative">
              <div className="md:w-1/2 flex flex-col mb-[auto] items-center mt-[159px] mx-w-[600px] justify-center z-[2] text-left">
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
