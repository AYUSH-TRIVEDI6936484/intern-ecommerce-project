import React from 'react';
import ShopByCategories from '../components/categories';
import { HomePageData } from '@/models/collection';
import { homePageData } from '@/data/homepage';
import BestSellers from '@/components/BestSellers';
import Slider from '../components/slider';


const Page: React.FC = () => {
  const collection = homePageData.storePublic.collection;

  return (
    <>
      <Slider />
      <ShopByCategories homePageData={homePageData as HomePageData} />
      <BestSellers collection={collection} />
    </>
  );
};

export default Page;
