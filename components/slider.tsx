'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { homePageData } from '@/data/homepage';
import { BannerImage } from '@/models/banner';

export default function Slider() {
  return (
    <>
      <style jsx>{`
        .swiper-pagination {
          text-align: center;
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
          gap: 0.5rem;
          font-size: 0;
        }
        .swiper-pagination-bullet {
          background: #fff;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #000;
          width: 16px;
          height: 16px;
        }
      `}</style>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        style={{ height: '100vh' }}
        className="max-w-full"
      >
        {homePageData.storeBanners.map((banner: BannerImage) => (
          <SwiperSlide key={banner.id}>
            <div className="bg-[var(--o-july-background)] min-h-screen flex flex-col justify-center items-center p-4 md:p-8 md:flex-row md:items-center relative">
              <div className="w-full flex justify-center">
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
