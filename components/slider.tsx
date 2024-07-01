'use client';
import React from 'react';
import Image from 'next/image';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Autoplay} from 'swiper/modules';
import {Pagination} from 'swiper/modules';
import {homePageData} from '@/data/homepage';
import {BannerImage} from '@/models/banner';

export default function Slider() {
  return (
    <div className="relative">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{clickable: true}}
        autoplay={{delay: 5000}}
        style={{height: '100vh'}}
        className="max-w-full"
      >
        {homePageData.storeBanners.map((banner: BannerImage, index: number) => (
          <SwiperSlide key={index}>
            <div className="relative h-full mx-auto">
              <Image
                src={`${banner.url}`}
                alt={`Banner ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center animate-slide-up">
                <div className="text-center px-8 text-[var(--o-white)]"></div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination" /> {/* Pagination container */}
      <style
        jsx
        global
      >{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        /* Custom Styles for Swiper Pagination Bullets */
        .swiper-pagination {
          position: absolute;
          bottom: 20px; /* Adjust this value as needed */
          left: 0;
          right: 0;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 10; /* Ensure bullets are above the banners */
        }

        .swiper-pagination-bullet {
          background-color: white !important; /* White color for non-active bullets */
          opacity: 1 !important; /* Ensuring full opacity */
          width: 12px; /* Size adjustments for the bullets */
          height: 12px; /* Size adjustments for the bullets */
          margin: 0 4px; /* Space between bullets */
        }

        .swiper-pagination-bullet-active {
          background-color: #000 !important; /* Custom color for the active bullet */
          width: 12px; /* Ensure active bullet size is consistent */
          height: 12px; /* Ensure active bullet size is consistent */
        }

        /* Optional: Add some transition effect to bullet change */
        .swiper-pagination-bullet,
        .swiper-pagination-bullet-active {
          transition: background-color 0.3s ease;
        }
      `}</style>
    </div>
  );
}
