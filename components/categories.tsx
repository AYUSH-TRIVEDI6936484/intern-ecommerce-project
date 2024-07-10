'use client';
import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import {HomePageData} from '../models/collection';

const cardClasses = 'relative w-64 h-96 overflow-hidden group';
const badgeClasses =
  'absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[var(--o-white)] text-[var(--o-text-black)] w-[150px] h-[41.6px] rounded-md shadow-lg text-center flex items-center justify-center font-semibold text-[14px]';

interface ShopByCategoriesProps {
  homePageData: HomePageData;
}

const ShopByCategories: React.FC<ShopByCategoriesProps> = ({homePageData}) => {
  return (
    <div className="bg-[var(--o-july-background)] pt-24 pb-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-[var(--o-text-black)]">
            Shop by Categories
          </h2>
        </div>
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          {homePageData.storePublic.collection.map((category) => (
            <SwiperSlide key={category.id}>
              <div className={cardClasses}>
                <Image
                  src={`https://${process.env.NEXT_PUBLIC_CDN_ADDRESS}/${category.featureImage}`}
                  alt={category.title}
                  layout="fill"
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                />
                <div className={badgeClasses}>{category.title}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ShopByCategories;
