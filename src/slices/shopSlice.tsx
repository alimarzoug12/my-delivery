import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Product {
  id: string;
  title: string;
  urlImage: string;
  price: number;
  quantity: number;
  totalPrice: number;
}

interface ProductState {
  products: Product[];
  totalQuantity: number;
  totalAmount: number;
}

const items: Product[] = 
  localStorage.getItem("products") !== null 
    ? JSON.parse(localStorage.getItem("products") || "[]") 
    : [];

const totalAmount: number = 
  localStorage.getItem("totalAmount") !== null 
    ? JSON.parse(localStorage.getItem("totalAmount") || "0") 
    : 0;

const totalQuantity: number = 
  localStorage.getItem("totalQuantity") !== null 
    ? JSON.parse(localStorage.getItem("totalQuantity") || "0") 
    : 0;

const setItemFunc = (items: Product[], totalAmount: number, totalQuantity: number) => {
  localStorage.setItem("products", JSON.stringify(items));
  localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
  localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
};

const initialState: ProductState = {
  products: items,
  totalAmount: totalAmount,
  totalQuantity: totalQuantity,
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Omit<Product, 'quantity' | 'totalPrice'>>) {
      const newItem = action.payload;
      const existingItem = state.products.find((item) => item.title === newItem.title);

      if (!existingItem) {
        state.products.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
        state.totalQuantity++;
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += existingItem.price;
        state.totalQuantity++;
      }

      state.totalAmount = state.products.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      setItemFunc(state.products, state.totalAmount, state.totalQuantity);
    },
    
    removeItem(state, action: PayloadAction<string>) {
      const title = action.payload;
      const existingItem = state.products.find(item => item.title === title);
      if (existingItem) {
        state.totalQuantity = Math.max(state.totalQuantity - 1, 0);
        if (existingItem.quantity === 1) {
          state.products = state.products.filter(item => item.title !== title);
        } else {
          existingItem.quantity--;
          existingItem.totalPrice -= existingItem.price;
        }
        state.totalAmount = Math.max(
          state.products.reduce((total, item) => total + item.price * item.quantity, 0),
          0
        );
        setItemFunc(state.products, state.totalAmount, state.totalQuantity);
      }
    },

    deleteItem(state, action: PayloadAction<string>) {
      const title = action.payload;
      const existingItem = state.products.find(item => item.title === title);
      if (existingItem) {
        state.products = state.products.filter(item => item.title !== title);
        state.totalQuantity = Math.max(state.totalQuantity - existingItem.quantity, 0);
        state.totalAmount = Math.max(
          state.products.reduce((total, item) => total + item.price * item.quantity, 0),
          0
        );
        setItemFunc(state.products, state.totalAmount, state.totalQuantity);
      }
    },

    clearShop(state) {
      state.products = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
      setItemFunc([], 0, 0);
    },
  },
});

export const shopActions = shopSlice.actions;
export default shopSlice.reducer;
