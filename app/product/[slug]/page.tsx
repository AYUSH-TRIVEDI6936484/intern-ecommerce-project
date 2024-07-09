'use client';
import {useState} from 'react';
import {singleProduct} from '../../../data/singleproductdata';
import Image from 'next/image';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination, Autoplay} from 'swiper/modules';

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
    <div className="p-4 max-w-[1200px] 2xl:max-w-[1440px] mx-auto">
      <div className="flex inset-y-0 left-5 gap-5">
        <div className="flex items-center">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            autoplay={{delay: 2000, disableOnInteraction: false}}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
            }}
            className="w-[387px] h-[690px]"
          >
            {galleryImages.map((image: GalleryImage, index: number) => (
              <SwiperSlide key={index}>
                <Image
                  src={image.location}
                  alt={singleProduct.title}
                  width={387}
                  height={690}
                  className="object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <style
            jsx
            global
          >{`
            .swiper-pagination-bullet {
              background: black;
            }
            .swiper-pagination-bullet-active {
              background: white;
            }
          `}</style>
        </div>
        <div className="ml-8">
          <h1 className="text-[34px]">{singleProduct.title}</h1>
          <div className="flex items-center my-2">
            <span className="text-xl font-bold">₹{singleProduct.price}</span>
            <div className="ml-4 text-sm text-[var(--o-text-lightgray)]">
              <span className="font-bold">30</span> guests are viewing this
              product
            </div>
          </div>
          <div className="flex space-x-4 my-4">
            <button className="bg-[var(--o-text-gray)] text-[var(--o-white)] px-4 py-2 rounded">
              Add to cart
            </button>
            <button className="bg-[var(--o-text-orange)] text-[var(--o-white)] px-4 py-2 rounded">
              Buy Now
            </button>
          </div>
          <div className="my-4 flex gap-7">
            <h2 className="text-lg font-semibold">Secure checkout with:</h2>
            <img
              src="https://july.uxper.co/fashion01/wp-content/uploads/sites/2/2022/04/payment-logo_e0eb93d9-1f43-41d8-9810-09ed5b649156.webp"
              alt="Payment Logos"
              width={300}
              height={30}
            />
          </div>
          <div className="my-4">
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
          <div className="bg-gray-100 p-4 rounded shadow">
            <p>{singleProduct.description}</p>
          </div>
        )}
        {activeTab === 'reviews' && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Add your review</h2>
            <form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
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
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
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
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Your rating
                </label>
                <div className="flex items-center">
                  {[...Array(5)].map((star, index) => (
                    <svg
                      key={index}
                      onClick={() => setRating(index + 1)}
                      className={`w-6 h-6 cursor-pointer ${
                        index < rating ? 'text-yellow-500' : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.69h4.175c.969 0 1.372 1.24.588 1.81l-3.382 2.46a1 1 0 00-.364 1.118l1.286 3.975c.3.921-.755 1.688-1.538 1.118l-3.382-2.46a1 1 0 00-1.175 0l-3.382 2.46c-.783.57-1.838-.197-1.538-1.118l1.286-3.975a1 1 0 00-.364-1.118L2.05 9.402c-.784-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.975z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="review"
                >
                  Your review *
                </label>
                <textarea
                  id="review"
                  placeholder="Write your review"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24"
                ></textarea>
              </div>
              <div className="mb-4">
                <button className="bg-[var(--o-text-orange)] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
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
