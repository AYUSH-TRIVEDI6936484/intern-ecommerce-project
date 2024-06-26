export interface CollectionData {
    id: string;
    title: string;
    featureImage: string;
  }
  

export interface HomePageData {
    storePublic: {
      collection: CollectionData[];
    };
  }