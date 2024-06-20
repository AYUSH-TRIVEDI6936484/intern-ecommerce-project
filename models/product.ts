// types.ts
export interface Product {
  id: string;
  title: string;
  stockStatus: string;
  slug: string;
  type: string;
  salesPrice: number;
  price: number;
  featureImage: string;
}

export interface Collection {
  id: string;
  slug: string;
  title: string;
  featureImage: string;
  Product: Product[];
}

export interface HomePageData {
  collection: Collection[];
}
