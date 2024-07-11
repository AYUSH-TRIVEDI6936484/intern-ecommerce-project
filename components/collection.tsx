import React from 'react';
import Image from 'next/image';

interface CollectionData {
  id: string;
  title: string;
  featureImage: string;
}

interface CategoryProps {
  collections: CollectionData[];
}

const cardClasses = 'relative w-full h-48 sm:h-96 overflow-hidden group'; 
const badgeClasses =
  'absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-zinc-800 var(--o-text-black) w-[100px] h-[30px] sm:w-[150px] sm:h-[41.6px] rounded-md shadow-lg text-center flex items-center justify-center font-semibold text-[12px] sm:text-[14px]';

const Category: React.FC<CategoryProps> = ({ collections }) => {
  return (
    <div className="bg-[var(--o-july-background)] pt-5 pb-18 max-w-[1200px] 2xl:max-w-[1440px] mx-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold var(--o-text-black)">
            Shop by Categories
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-x-[60px]">
          {collections.map((category) => (
            <div key={category.id} className={cardClasses}>
              <Image
                src={`https://${process.env.NEXT_PUBLIC_CDN_ADDRESS}/${category.featureImage}`}
                alt={category.title}
                layout="fill"
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
              />
              <div className={badgeClasses}>{category.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
