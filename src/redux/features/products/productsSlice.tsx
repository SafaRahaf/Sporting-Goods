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
    const response = await axios.get(
      "https://sport-goods-backend.onrender.com/api/products"
    );
    return response.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (_id: string) => {
    await axios.delete(
      `https://sport-goods-backend.onrender.com/api/products/${_id}`
    );
    return _id;
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (updatedProduct: IProduct) => {
    const { _id, ...rest } = updatedProduct;
    const response = await axios.put(
      `https://sport-goods-backend.onrender.com/api/products/${_id}`,
      { ...rest, price: Number(rest.price), stock: Number(rest.stock) }
    );
    return response.data;
  }
);

const filterAndSortProducts = (state: ProductsState) => {
  const { products, searchQuery, filter, sort } = state;

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
    setSort(state, action: PayloadAction<string>) {
      state.sort = action.payload;
      state.filteredProducts = filterAndSortProducts(state);
    },
    addProduct(state, action: PayloadAction<IProduct>) {
      state.products.push(action.payload);
      state.filteredProducts = filterAndSortProducts(state);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
      state.filteredProducts = filterAndSortProducts(state);
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? "Something went wrong";
    });

    builder.addCase(deleteProduct.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.products = state.products.filter(
        (product) => product._id !== action.payload
      );
      state.filteredProducts = filterAndSortProducts(state);
    });
    builder.addCase(deleteProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? "Something went wrong";
    });

    builder.addCase(updateProduct.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.products = state.products.map((product) =>
        product._id === action.payload._id ? action.payload : product
      );
      state.filteredProducts = filterAndSortProducts(state);
    });
    builder.addCase(updateProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? "Something went wrong";
    });
  },
});

export const { setSearchQuery, setFilter, setSort, addProduct } =
  productsSlice.actions;

export default productsSlice.reducer;
