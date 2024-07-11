export interface CartItem {
  _id?: any;
  title: string;
  image: string;
  price: number;
  quantity: number;
}

export interface CartState {
  cart: CartItem[];
  loading: boolean;
  error: string | null;
}
