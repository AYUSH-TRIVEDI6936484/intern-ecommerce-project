import React from 'react';
import {Collection} from '@/models/product';


interface CollectionProps {
  collection: Collection[];
}

const CollectionPage: React.FC<CollectionProps> = ({collection}) => {
  return (
    <div className="container mx-auto py-8 bg-[var(--o-july-background)] px-4 sm:px-6 lg:px-8">
      {collection.map((col) => (
        <div
          key={col.id}
          className="mb-8"
        >
          <h2
            className="text-2xl font-bold mb-4 text-center"
            style={{fontSize: '34px', lineHeight: '44px', fontWeight: 500}}
          >
            {col.title}
          </h2>
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {col.Product.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col items-center mb-4"
                >
                  <div
                    className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200 bg-white relative group"
                    style={{maxWidth: '220px', height: '350px'}}
                  >
                    <img
                      src={`https://${process.env.NEXT_PUBLIC_CDN_ADDRESS}/${product.featureImage}`}
                      alt={product.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <img
                        src={`https://${process.env.NEXT_PUBLIC_CDN_ADDRESS}/${product.featureImage}`}
                        alt={product.title}
                        className="absolute inset-0 w-full h-full object-cover rounded-lg transform transition-transform duration-500 ease-in-out"
                        style={{transform: 'scale(1.1)'}}
                      />
                      <button className="absolute bottom-0 left-0 w-full bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#c8815f]">
                        Select Option
                      </button>
                    </div>
                  </div>
                  <div className="mt-4 text-center text-[16px]">
                    <h3 className="text-lg mb-2">
                      {product.title}
                    </h3>
                    <div className="flex gap-2 items-center justify-center text-[15px]">
                    <p className="text-gray-700 mb-1">
                      ₹ {product.salesPrice}
                    </p>
                    <p className="text-gray-500 line-through">
                      ₹ {product.price}
                    </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollectionPage;
