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
        spaceBetween={10}
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
          width: 10px; /* Size adjustments for the bullets */
          height: 10px; /* Size adjustments for the bullets */
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

        /* Responsive Styles */
        @media (max-width: 1280px) {
          .swiper-pagination {
            bottom: 18px; /* Adjust this value for large tablets or small laptops */
          }

          .swiper-pagination-bullet {
            width: 9px; /* Smaller bullets for large tablets or small laptops */
            height: 9px; /* Smaller bullets for large tablets or small laptops */
          }

          .swiper-pagination-bullet-active {
            width: 11px; /* Adjust active bullet size for large tablets or small laptops */
            height: 11px; /* Adjust active bullet size for large tablets or small laptops */
          }
        }

        @media (max-width: 1024px) {
          .swiper-pagination {
            bottom: 15px; /* Adjust this value for medium screens */
          }

          .swiper-pagination-bullet {
            width: 8px; /* Smaller bullets for medium screens */
            height: 8px; /* Smaller bullets for medium screens */
          }

          .swiper-pagination-bullet-active {
            width: 10px; /* Adjust active bullet size for medium screens */
            height: 10px; /* Adjust active bullet size for medium screens */
          }
        }

        @media (max-width: 768px) {
          .swiper-pagination {
            bottom: 15px; /* Adjust this value for smaller screens */
          }

          .swiper-pagination-bullet {
            width: 8px; /* Smaller bullets for smaller screens */
            height: 8px; /* Smaller bullets for smaller screens */
          }

          .swiper-pagination-bullet-active {
            width: 10px; /* Adjust active bullet size for smaller screens */
            height: 10px; /* Adjust active bullet size for smaller screens */
          }
        }

        @media (max-width: 480px) {
          .swiper-pagination {
            bottom: 10px; /* Adjust this value for smaller screens */
          }

          .swiper-pagination-bullet {
            width: 6px; /* Smaller bullets for smaller screens */
            height: 6px; /* Smaller bullets for smaller screens */
          }

          .swiper-pagination-bullet-active {
            width: 8px; /* Adjust active bullet size for smaller screens */
            height: 8px; /* Adjust active bullet size for smaller screens */
          }
        }

        @media (max-width: 425px) {
          .swiper-pagination {
            bottom: 8px; /* Adjust this value for screens 425px wide */
          }

          .swiper-pagination-bullet {
            width: 5px; /* Smaller bullets for screens 425px wide */
            height: 5px; /* Smaller bullets for screens 425px wide */
          }

          .swiper-pagination-bullet-active {
            width: 7px; /* Adjust active bullet size for screens 425px wide */
            height: 7px; /* Adjust active bullet size for screens 425px wide */
          }
        }

        @media (max-width: 375px) {
          .swiper-pagination {
            bottom: 6px; /* Adjust this value for screens 375px wide */
          }

          .swiper-pagination-bullet {
            width: 4px; /* Smaller bullets for screens 375px wide */
            height: 4px; /* Smaller bullets for screens 375px wide */
          }

          .swiper-pagination-bullet-active {
            width: 6px; /* Adjust active bullet size for screens 375px wide */
            height: 6px; /* Adjust active bullet size for screens 375px wide */
          }
        }

        @media (max-width: 320px) {
          .swiper-pagination {
            bottom: 6px; /* Adjust this value for screens 320px wide */
          }

          .swiper-pagination-bullet {
            width: 3px; /* Smaller bullets for screens 320px wide */
            height: 3px; /* Smaller bullets for screens 320px wide */
          }

          .swiper-pagination-bullet-active {
            width: 5px; /* Adjust active bullet size for screens 320px wide */
            height: 5px; /* Adjust active bullet size for screens 320px wide */
          }
        }
      `}</style>
    </div>
  );
}
