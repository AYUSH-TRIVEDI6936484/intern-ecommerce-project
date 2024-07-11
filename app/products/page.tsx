'use client';
import {useState} from 'react';
import Image from 'next/image';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Navigation, Pagination, Autoplay} from 'swiper/modules';
import {singleVariable} from '../../data/variableproductdata';

export default function Home() {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedWeight, setSelectedWeight] = useState('');
  const [activeTab, setActiveTab] = useState('description');

  const sizes = [
    ...new Set(
      singleVariable.ProductOption.map(
        (option) => option.variantName.split(';')[0]
      )
    ),
  ];
  const colors = selectedSize
    ? [
        ...new Set(
          singleVariable.ProductOption.filter(
            (option) => option.variantName.split(';')[0] === selectedSize
          ).map((option) => option.variantName.split(';')[1])
        ),
      ]
    : [];
  const weights = selectedColor
    ? [
        ...new Set(
          singleVariable.ProductOption.filter(
            (option) =>
              option.variantName.split(';')[0] === selectedSize &&
              option.variantName.split(';')[1] === selectedColor
          ).map((option) => option.variantName.split(';')[3])
        ),
      ]
    : [];

  const galleryImages = singleVariable.gallery
    .split(';')
    .map((item) => JSON.parse(item).location);
  const [rating, setRating] = useState(0);

  return (
    <>
      <div className="p-4 max-w-[1200px] 2xl:max-w-[1440px] mx-auto flex flex-col items-center">
        <div className="flex flex-col md:flex-row gap-5 items-center">
          <div className="flex items-center">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={10}
              slidesPerView={1}
              autoplay={{delay: 2000}}
              pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active',
              }}
              className="w-[300px] h-[450px] sm:w-[350px] sm:h-[550px] md:w-[387px] md:h-[690px]"
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
          <div className="md:ml-8 text-center md:text-left mt-4 md:mt-0">
            <h1 className="text-[20px] md:text-[34px]">
              {singleVariable.title}
            </h1>
            <div className="flex flex-col items-center md:items-start my-2">
              <span className="text-lg md:text-xl font-bold">
                ${singleVariable.price}
              </span>
              <div className="text-xs md:text-sm text-[var(--o-text-lightgray)] mt-2">
                <span className="font-bold">30</span> guests are viewing this
                product
              </div>
            </div>
            <div className="my-4">
              <h2 className="text-sm md:text-lg font-semibold">Size:</h2>
              <div className="flex justify-center md:justify-start space-x-2 mt-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`border border-gray-300 rounded px-2 py-1 md:px-4 md:py-2 hover:bg-gray-100 ${selectedSize === size ? 'bg-gray-200' : ''}`}
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
                <h2 className="text-sm md:text-lg font-semibold">Color:</h2>
                <div className="flex justify-center md:justify-start space-x-2 mt-2">
                  {colors.map((color) => (
                    <button
                      key={color}
                      className={`border border-gray-300 rounded px-2 py-1 md:px-4 md:py-2 hover:bg-gray-100 ${selectedColor === color ? 'bg-gray-200' : ''}`}
                      style={{backgroundColor: color}}
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
                <h2 className="text-sm md:text-lg font-semibold">Weight:</h2>
                <div className="flex justify-center md:justify-start space-x-2 mt-2">
                  {weights.map((weight) => (
                    <button
                      key={weight}
                      className={`border border-gray-300 rounded px-2 py-1 md:px-4 md:py-2 hover:bg-gray-100 ${selectedWeight === weight ? 'bg-gray-200' : ''}`}
                      onClick={() => setSelectedWeight(weight)}
                    >
                      {weight}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <div className="flex justify-center md:justify-start space-x-4 my-4">
              <button className="bg-[var(--light-gray)] text-[var(--o-white)] px-2 py-1 md:px-4 md:py-2 rounded">
                Add to cart
              </button>
              <button className="bg-[var(--o-text-orange)] text-[var(--o-white)] px-2 py-1 md:px-4 md:py-2 rounded">
                Buy Now
              </button>
            </div>
            <div className="my-4 flex justify-center md:justify-start gap-4 md:gap-7">
              <h2 className="text-sm md:text-lg font-semibold">
                Secure checkout with:
              </h2>
              <img
                src="https://july.uxper.co/fashion01/wp-content/uploads/sites/2/2022/04/payment-logo_e0eb93d9-1f43-41d8-9810-09ed5b649156.webp"
                alt="Payment Methods"
                className="w-24 md:w-72"
              />
            </div>
            <div className="my-4 text-center md:text-left">
              <div className="text-[var(--light-gray)]">
                Delivers in: <span className="font-bold">3-7 Working Days</span>
              </div>
              <div className="text-[var(--light-gray)]">
                Free shipping over $300
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
              <p className="text-sm md:text-base">
                {singleVariable.description}
              </p>
            </div>
          )}
          {activeTab === 'reviews' && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Add your review</h2>
              <form>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm md:text-base font-bold mb-2"
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
                    className="block text-gray-700 text-sm md:text-base font-bold mb-2"
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
                  <label
                    className="block text-gray-700 text-sm md:text-base font-bold mb-2"
                    htmlFor="rating"
                  >
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
                  <label
                    className="block text-gray-700 text-sm md:text-base font-bold mb-2"
                    htmlFor="review"
                  >
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
    </>
  );
}
