import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import {
  IProduct,
  ProductsState,
  FilterState,
} from "@/interface/productInterface";

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
  filteredProducts: [],
  searchQuery: "",
  filter: {
    category: "",
    priceMin: undefined,
    priceMax: undefined,
    brand: "",
    rating: 0,
  },
  sort: "",
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("http://localhost:5000/api/products");
    return response.data;
  }
);

const filterAndSortProducts = (state: ProductsState) => {
  const { products, searchQuery, filter, sort } = state;

  // Filter logic with price range
  return products
    .filter(
      (product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (filter.category ? product.category === filter.category : true) &&
        (filter.priceMin === undefined || product.price >= filter.priceMin) &&
        (filter.priceMax === undefined || product.price <= filter.priceMax) &&
        (filter.brand ? product.brand === filter.brand : true) &&
        product.rating >= filter.rating
    )
    .sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      return 0;
    });
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
      state.filteredProducts = filterAndSortProducts(state);
    },
    setFilter(state, action: PayloadAction<Partial<FilterState>>) {
      state.filter = { ...state.filter, ...action.payload };
      state.filteredProducts = filterAndSortProducts(state);
    },
    clearFilter(state) {
      state.filter = initialState.filter;
      state.filteredProducts = filterAndSortProducts(state);
    },
    setSort(state, action: PayloadAction<string>) {
      state.sort = action.payload;
      state.filteredProducts = filterAndSortProducts(state);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<IProduct[]>) => {
          state.loading = false;
          state.products = action.payload;
          state.filteredProducts = filterAndSortProducts({
            ...state,
            products: action.payload,
          });
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch products";
      });
  },
});

export const { setSearchQuery, setFilter, clearFilter, setSort } =
  productsSlice.actions;

export default productsSlice.reducer;
