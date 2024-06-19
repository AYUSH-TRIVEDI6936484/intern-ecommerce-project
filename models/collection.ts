export interface Product {
  title: string;
  stockStatus: string;
  slug: string;
  type: string;
  salesPrice: number;
  price: number;
  id: string;
  featureImage: string;
}

export interface BestSeller{
  products: Product[];
}

export interface Category {
  id: string;
  slug: string;
  title: string;
  featureImage: string;
  Product: Product[];
}

export interface HomePageData {
  storePublic: {
    collection: Category[];
  };
}
