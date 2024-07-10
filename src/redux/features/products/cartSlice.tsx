import { CartItem, CartState } from "@/interface/cartInterface";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const loadCartFromLocalStorage = (): CartItem[] => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
};

const initialState: CartState = {
  cart: loadCartFromLocalStorage(),
  loading: false,
  error: null,
};

const saveCartToLocalStorage = (cart: CartItem[]) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const fetchProducts = createAsyncThunk(
  "cart/fetchProducts",
  async () => {
    const response = await axios.get("http://localhost:5000/api/products");
    return response.data;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const newItem = action.payload;
      const existingItem = state.cart.find((item) => item._id === newItem._id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...newItem, quantity: 1 });
      }
      saveCartToLocalStorage(state.cart);
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
      saveCartToLocalStorage(state.cart);
    },
    updateQuantity(
      state,
      action: PayloadAction<{ itemId: string; quantity: number }>
    ) {
      const { itemId, quantity } = action.payload;
      const item = state.cart.find((item) => item._id === itemId);
      if (item) {
        item.quantity = quantity;
      }
      saveCartToLocalStorage(state.cart);
    },
    clearCart(state) {
      state.cart = [];
      saveCartToLocalStorage(state.cart);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch products";
      });
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
