// store/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { products } from '../data';

interface ProductType {
  id: number;
  name: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  price: number;
  description: string;
  quantity: number;
  isChecked: boolean;
}

export interface CartState {
  data: ProductType[];
  total: number;
}

const initialState: CartState = {
  data: products,
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCheck(state, action: PayloadAction<number>) {
      const product = state.data.find(p => p.id === action.payload);
      if (product) {
        product.isChecked = !product.isChecked;
      }
    },
    toggleCheckAll(state) {
      const allChecked = state.data.every(product => product.isChecked);
      state.data.forEach(product => {
        product.isChecked = !allChecked;
      });
    },
    deleteProduct(state, action: PayloadAction<number>) {
      state.data = state.data.filter(product => product.id !== action.payload);
    },
    deleteAll(state) {
      state.data = state.data.filter(product => !product.isChecked);
    },
    incrementQuantity(state, action: PayloadAction<number>) {
      const product = state.data.find(p => p.id === action.payload);
      if (product) {
        product.quantity += 1;
      }
    },
    decrementQuantity(state, action: PayloadAction<number>) {
      const product = state.data.find(p => p.id === action.payload);
      if (product) {
        product.quantity = Math.max(product.quantity - 1, 0);
      }
    },
    calculateTotal(state) {
      state.total = state.data
        .filter(product => product.isChecked)
        .reduce((acc, product) => acc + product.price * product.quantity, 0);
    },
  },
});

export const {
  toggleCheck,
  toggleCheckAll,
  deleteProduct,
  deleteAll,
  incrementQuantity,
  decrementQuantity,
  calculateTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
