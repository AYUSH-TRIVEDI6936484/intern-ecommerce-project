import ShopByCategories from '../components/categories';
import { HomePageData } from '@/models/collection';
import { homePageData } from '@/data/homepage';
import Slider from '../components/slider';
export default function Page() {
  // const collection = homePageData.storePublic.collection;
  // console.log(collection);
  return (
    <>
      {<Slider />}
      {<ShopByCategories homePageData={homePageData as HomePageData}/>}
    </>
  );
}
