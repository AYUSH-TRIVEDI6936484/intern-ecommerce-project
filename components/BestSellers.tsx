import React from 'react';
import { Collection } from '@/models/product';

interface CollectionProps {
  collection: Collection[];
}

const CollectionPage: React.FC<CollectionProps> = ({ collection }) => {
  return (
    <div className="container mx-auto py-8 bg-white">
      {collection.map((col) => (
        <div key={col.id} className="mb-8">
          <h2
            className="text-2xl font-bold mb-4 text-center"
            style={{ fontSize: '34px', lineHeight: '44px', fontWeight: 500 }}
          >
            {col.title}
          </h2>
          <div className="ml-[9rem] mr-[9rem]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-8 lg:gap-x-30 lg:gap-y-30">
              {col.Product.map((product) => (
                <div key={product.id} className="flex flex-col items-center mb-4">
                  <div
                    className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200 bg-white relative"
                    style={{ maxWidth: '220px', height: '350px' }}
                  >
                    <img
                      src={`https://${process.env.NEXT_PUBLIC_CDN_ADDRESS}/${product.featureImage}`}
                      alt={product.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <img
                        src={`https://${process.env.NEXT_PUBLIC_CDN_ADDRESS}/${product.featureImage}`}
                        alt={product.title}
                        className="absolute inset-0 w-full h-full object-cover rounded-lg transform transition-transform duration-500 ease-in-out"
                        style={{ transform: 'scale(1.1)' }}
                      />
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                    <p className="text-gray-700 mb-1">Sales Price: ₹{product.salesPrice}</p>
                    <p className="text-gray-500 line-through">Price: ₹{product.price}</p>
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
