'use client';
import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import {Navigation} from 'swiper/modules';
import {HomePageData} from '../models/collection';

const cardClasses = 'relative w-64 h-96 overflow-hidden group';
const badgeClasses =
  'absolute bottom-4 left-4 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 px-2 py-1 rounded-md shadow-lg';
const buttonClasses =
  'p-2 rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700';

interface ShopByCategoriesProps {
  homePageData: HomePageData;
}

const ShopByCategories: React.FC<ShopByCategoriesProps> = ({homePageData}) => {
  return (
    <div className="bg-white pt-24 pb-[4rem] pb-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
            Shop by Categories
          </h2>
          <div className="flex space-x-2">
            <button className={`swiper-button-prev ${buttonClasses}`}>
              <span aria-hidden="true">&lt;</span>
            </button>
            <button className={`swiper-button-next ${buttonClasses}`}>
              <span aria-hidden="true">&gt;</span>
            </button>
          </div>
        </div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={4}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          className="mySwiper"
        >
          {homePageData.storePublic.collection.map((category) => (
            <SwiperSlide key={category.id}>
              <div className={cardClasses}>
                <Image
                  src={`https://${process.env.NEXT_PUBLIC_CDN_ADDRESS}/${category.featureImage}`}
                  alt={category.title}
                  layout='fill'
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
