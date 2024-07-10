export interface IProduct {
  id?: any;
  _id?: any;
  image: string;
  title: string;
  price: number;
  category: string;
  stock: number;
  brand: string;
  rating: number;
  description: string;
}

export interface FilterState {
  category: string;
  priceMin?: number;
  priceMax?: number;
  brand: string;
  rating: number;
}

export interface ProductsState {
  products: IProduct[];
  filteredProducts: IProduct[];
  loading: boolean;
  error: string | null;
  searchQuery: string;
  filter: FilterState;
  sort: string;
}
