'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { singleVariable } from '../../data/variableproductdata';

export default function Home() {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedWeight, setSelectedWeight] = useState('');

  const sizes = [...new Set(singleVariable.ProductOption.map(option => option.variantName.split(';')[0]))];
  const colors = selectedSize ? [...new Set(singleVariable.ProductOption.filter(option => option.variantName.split(';')[0] === selectedSize).map(option => option.variantName.split(';')[1]))] : [];
  const weights = selectedColor ? [...new Set(singleVariable.ProductOption.filter(option => option.variantName.split(';')[0] === selectedSize && option.variantName.split(';')[1] === selectedColor).map(option => option.variantName.split(';')[3]))] : [];
  
  const galleryImages = singleVariable.gallery.split(';').map(item => JSON.parse(item).location);

  return (
    <>
      <div className="p-4 max-w-[1200px] 2xl:max-w-[1440px] mx-auto">
        <div className="flex inset-y-0 left-5 gap-5">
          <div className="flex items-center">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={10}
              slidesPerView={1}
              autoplay={{ delay: 2000 }}
              pagination={{ clickable: true, bulletClass: 'swiper-pagination-bullet', bulletActiveClass: 'swiper-pagination-bullet-active' }}
              className="w-[387px] h-[690px]"
            >
              {galleryImages.map((src, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={src}
                    alt={`Product Image ${index + 1}`}
                    width={387}
                    height={690}
                    className="object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="ml-8">
            <h1 className="text-[34px]">{singleVariable.title}</h1>
            <div className="flex items-center my-2">
              <span className="text-xl font-bold">${singleVariable.price}</span>
              <div className="ml-4 text-sm text-[var(--o-text-lightgray)]">
                <span className="font-bold">30</span> guests are viewing this product
              </div>
            </div>
            <div className="my-4">
              <h2 className="text-lg font-semibold">Size:</h2>
              <div className="flex space-x-2 mt-2">
                {sizes.map(size => (
                  <button
                    key={size}
                    className={`border border-gray-300 rounded px-4 py-2 hover:bg-gray-100 ${selectedSize === size ? 'bg-gray-200' : ''}`}
                    onClick={() => {
                      setSelectedSize(size);
                      setSelectedColor('');
                      setSelectedWeight('');
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            {selectedSize && (
              <div className="my-4">
                <h2 className="text-lg font-semibold">Color:</h2>
                <div className="flex space-x-2 mt-2">
                  {colors.map(color => (
                    <button
                      key={color}
                      className={`border border-gray-300 rounded px-4 py-2 hover:bg-gray-100 ${selectedColor === color ? 'bg-gray-200' : ''}`}
                      style={{ backgroundColor: color }}
                      onClick={() => {
                        setSelectedColor(color);
                        setSelectedWeight('');
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
            {selectedColor && (
              <div className="my-4">
                <h2 className="text-lg font-semibold">Weight:</h2>
                <div className="flex space-x-2 mt-2">
                  {weights.map(weight => (
                    <button
                      key={weight}
                      className={`border border-gray-300 rounded px-4 py-2 hover:bg-gray-100 ${selectedWeight === weight ? 'bg-gray-200' : ''}`}
                      onClick={() => setSelectedWeight(weight)}
                    >
                      {weight}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <div className="flex space-x-4 my-4">
              <button className="bg-[var(--light-gray)] text-[var(--o-white)] px-4 py-2 rounded">Add to cart</button>
              <button className="bg-[var(--o-text-orange)] text-[var(--o-white)] px-4 py-2 rounded">Buy Now</button>
            </div>
            <div className="my-4 flex gap-7">
              <h2 className="text-lg font-semibold">Secure checkout with:</h2>
              <img src="https://july.uxper.co/fashion01/wp-content/uploads/sites/2/2022/04/payment-logo_e0eb93d9-1f43-41d8-9810-09ed5b649156.webp" alt="Payment Methods" width={300} height={30}/>
            </div>
            <div className="my-4">
              <div className="text-[var(--light-gray)]">Delivers in: <span className="font-bold">3-7 Working Days</span></div>
              <div className="text-[var(--light-gray)]">Free shipping over $300</div>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: black;
        }
        .swiper-pagination-bullet-active {
          background: white;
        }
      `}</style>
    </>
  );
}
