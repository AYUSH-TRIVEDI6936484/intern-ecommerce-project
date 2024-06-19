'use client'
import React, { useState } from 'react';

const products = [
  {
    id: '1',
    title: 'Nike Air Max 97 OG',
    salesPrice: 229.00,
    featureImage: "/assets/product_section_img/img1.jpg",
  },
  {
    id: '2',
    title: 'Hampton Linen Shirt',
    salesPrice: 99.00,
    featureImage: "/assets/product_section_img/img2.jpg",
  },
  {
    id: '3',
    title: 'Coastal Linen S/S Shirt',
    salesPrice: 349.00,
    featureImage: "/assets/product_section_img/img3.jpg",
  },
  {
    id: '4',
    title: 'Stonewashed Utility Jacket',
    salesPrice: 529.00,
    featureImage: "/assets/product_section_img/img4.jpg",
  },
];

const BestSellers = () => {
  const [currentImage, setCurrentImage] = useState(products.map(p => p.featureImage));

  const handleImageChange = (index: number) => {
    // Logic to change the image, for demonstration it just toggles the image
    setCurrentImage(prev => prev.map((img, i) => i === index ? '/images/another_image.png' : img));
  };

  return (
    <div className="py-8 px-4 bg-white">
      <h1 className="text-2xl font-bold text-center mb-6">Best Sellers</h1>
      <div className="flex justify-center mb-6 space-x-4">
        <span className="cursor-pointer font-semibold text-gray-500 hover:text-black">Mens</span>
        <span className="cursor-pointer font-semibold text-gray-500 hover:text-black">Womens</span>
        <span className="cursor-pointer font-semibold text-gray-500 hover:text-black">Kids</span>
      </div>
      <div className="flex justify-center bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px] bg-white">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="text-center cursor-pointer transform hover:scale-105 transition-transform duration-200 bg-white"
              style={{ width: '270px', height: '425px', border: 'none' }}
              onClick={() => handleImageChange(index)}
            >
              <img src={currentImage[index]} alt={product.title} className="w-full mb-4" style={{ width: '270px', height: '350px' }} />
              <h2 className="text-lg font-semibold mb-2 text-left">{product.title}</h2>
              <p className="text-gray-700 text-left">{`$${product.salesPrice.toFixed(2)}`}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
