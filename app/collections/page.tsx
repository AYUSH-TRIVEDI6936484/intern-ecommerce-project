import React from 'react';
import {homePageData} from '@/data/homepage';
import {CollectionData} from '@/models/category';
import Category from '@/components/collection';

const Page = () => {
  const collections: CollectionData[] = homePageData.storePublic.collection;
  //   console.log(collections);
  return (
    <div>
      <Category collections={collections} />
    </div>
  );
};

export default Page;
