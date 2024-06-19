import ShopByCategories from '../components/categories';
import {HomePageData} from '@/models/collection';
import {homePageData} from '@/data/homepage';
import BestSellers from '@/components/BestSellers';
// import { Product } from '@/components/BestSellers';
import Slider from '../components/slider';
export default function Page() {
  return (
    <>
      {<Slider />}
      {<ShopByCategories homePageData={homePageData as HomePageData} />}
      { <BestSellers />}
    </>
  );
}
