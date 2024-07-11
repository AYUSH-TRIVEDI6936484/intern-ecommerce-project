'use client';
import { useState } from 'react';
import { singleProduct } from '../../../data/singleproductdata';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

interface GalleryImage {
  location: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  size: string;
  key: string;
  contentType: string;
  contentEncoding: null;
}

export default function Home() {
  const galleryImages: GalleryImage[] = JSON.parse(singleProduct.gallery);
  const [rating, setRating] = useState(0);
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="p-4 max-w-[1200px] 2xl:max-w-[1440px] mx-auto flex flex-col items-center">
      <div className="flex flex-col md:flex-row gap-5 items-center">
        <div className="flex items-center">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
            }}
            className="w-[300px] h-[450px] sm:w-[350px] sm:h-[550px] md:w-[387px] md:h-[690px]"
          >
            {galleryImages.map((image: GalleryImage, index: number) => (
              <SwiperSlide key={index}>
                <Image
                  src={image.location}
                  alt={singleProduct.title}
                  width={300}
                  height={450}
                  className="object-cover w-full h-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <style jsx global>{`
            .swiper-pagination-bullet {
              background: black;
            }
            .swiper-pagination-bullet-active {
              background: white;
            }
          `}</style>
        </div>
        <div className="md:ml-8 mt-4 md:mt-0 text-center md:text-left">
          <h1 className="text-[20px] md:text-[34px]">{singleProduct.title}</h1>
          <div className="flex flex-col items-center md:items-start my-2">
            <span className="text-lg md:text-xl font-bold">₹{singleProduct.price}</span>
            <div className="ml-0 md:ml-4 text-xs md:text-sm text-[var(--o-text-lightgray)] mt-2">
              <span className="font-bold">30</span> guests are viewing this product
            </div>
          </div>
          <div className="flex justify-center md:justify-start space-x-4 my-4">
            <button className="bg-[var(--o-text-gray)] text-[var(--o-white)] px-2 py-1 md:px-4 md:py-2 rounded">
              Add to cart
            </button>
            <button className="bg-[var(--o-text-orange)] text-[var(--o-white)] px-2 py-1 md:px-4 md:py-2 rounded">
              Buy Now
            </button>
          </div>
          <div className="my-4 flex justify-center md:justify-start gap-4 md:gap-7">
            <h2 className="text-sm md:text-lg font-semibold">Secure checkout with:</h2>
            <img
              src="https://july.uxper.co/fashion01/wp-content/uploads/sites/2/2022/04/payment-logo_e0eb93d9-1f43-41d8-9810-09ed5b649156.webp"
              alt="Payment Logos"
              className="w-24 md:w-72"
            />
          </div>
          <div className="my-4 text-center md:text-left text-xs md:text-base">
            <div className="text-[var(--light-gray)]">
              Delivers in: <span className="font-bold">3-7 Working Days</span>
            </div>
            <div className="text-[var(--light-gray)]">
              Free shipping over ₹3000
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 w-full">
        <div className="flex justify-center border-b mb-4">
          <button
            className={`py-2 px-4 ${activeTab === 'description' ? 'border-b-2 border-black' : ''}`}
            onClick={() => setActiveTab('description')}
          >
            Description
          </button>
          <button
            className={`py-2 px-4 ${activeTab === 'reviews' ? 'border-b-2 border-black' : ''}`}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews
          </button>
        </div>
        {activeTab === 'description' && (
          <div className="bg-gray-100 p-2 md:p-4 rounded shadow">
          <p className="text-sm md:text-base">{singleProduct.description}</p>
        </div>
        )}
        {activeTab === 'reviews' && (
          <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Add your review</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm md:text-base font-bold mb-2" htmlFor="name">
                Name *
              </label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm md:text-base font-bold mb-2" htmlFor="email">
                Email *
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm md:text-base font-bold mb-2" htmlFor="rating">
                Rating *
              </label>
              <select
                id="rating"
                value={rating}
                onChange={(e) => setRating(parseInt(e.target.value))}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="0">Select rating</option>
                <option value="1">1 - Poor</option>
                <option value="2">2 - Fair</option>
                <option value="3">3 - Good</option>
                <option value="4">4 - Very good</option>
                <option value="5">5 - Excellent</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm md:text-base font-bold mb-2" htmlFor="review">
                Your review *
              </label>
              <textarea
                id="review"
                placeholder="Write your review here"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-[var(--light-gray)] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        )}
      </div>
    </div>
  );
}
