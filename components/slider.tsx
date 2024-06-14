'use client';
import Image from 'next/image';
import {Swiper , SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Autoplay, Pagination} from 'swiper/modules';
import {homePageData} from '@/data/homepage';
import {BannerImage} from '@/models/banner';

export default function Slider() {
  return (
    <>
      <style jsx>{`
        .swiper-pagination {
          text-align: center; /* Center align the pagination dots */
          position: relative;
          user-select: none;
          width: auto;
          outline: none;
          transition: 0.3s;
          z-index: 10;
        }
        .swiper-pagination-bullets {
          display: flex;
          justify-content: center;
          gap: 0.5rem; /* Add some spacing between the dots */
          font-size: 0;
        }
        .swiper-pagination-bullet {
          background: #fff; /* Change the dot color to white */
          width: 12px; /* Set dot width */
          height: 12px; /* Set dot height */
          border-radius: 50%; /* Make the dots circular */
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #000; /* Active dot color (black) */
          width: 16px; /* Active dot width */
          height: 16px; /* Active dot height */
        }
      `}</style>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{clickable: true}}
        autoplay={{delay: 5000}}
        style={{height: '100vh'}}
        className="max-w-[-webkit-fill-available]"
      >
        {homePageData.storeBanners.map((banner: BannerImage) => (
          <SwiperSlide key={banner.id}>
            <div className="bg-[var(--o-july-background)] min-h-screen flex flex-col justify-center items-center p-8 md:flex-row md:items-center relative">
              <div className="md:w-full mt-8 md:mt-0 w-full flex justify-center">
                <Image
                  src={banner.url}
                  alt={`Fashion Model ${banner.id}`}
                  className="object-cover h-full w-full"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
