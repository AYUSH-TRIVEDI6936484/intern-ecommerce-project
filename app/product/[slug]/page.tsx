'use client';
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
            <Image
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
    </div>
  );
}
