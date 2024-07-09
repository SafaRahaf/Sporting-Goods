export interface CartItem {
  _id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface CartState {
  cart: CartItem[];
  loading: boolean;
  error: string | null;
}
