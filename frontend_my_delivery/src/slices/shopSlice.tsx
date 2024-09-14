// src/store/shopSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Price {
  tva: number;
  default: number;
  priceHT: number;
  override?: number;
  advancedPrice?: number;
  saleModeVatRates?: number[];
}

interface Product {
  id: string;
  title: string;
  urlImage: string;
  price: Price;
  quantity: number;
  totalPrice: number;
}

interface ProductState {
  products: Product[];
  totalQuantity: number;
  totalAmount: number;
}

// Helper functions to manage localStorage
const loadProductsFromLocalStorage = (): Product[] => {
  const items = localStorage.getItem('products');
  return items ? JSON.parse(items) : [];
};

const loadTotalAmountFromLocalStorage = (): number => {
  const totalAmount = localStorage.getItem('totalAmount');
  return totalAmount ? JSON.parse(totalAmount) : 0;
};

const loadTotalQuantityFromLocalStorage = (): number => {
  const totalQuantity = localStorage.getItem('totalQuantity');
  return totalQuantity ? JSON.parse(totalQuantity) : 0;
};

const setItemFunc = (items: Product[], totalAmount: number, totalQuantity: number) => {
  localStorage.setItem('products', JSON.stringify(items));
  localStorage.setItem('totalAmount', JSON.stringify(totalAmount));
  localStorage.setItem('totalQuantity', JSON.stringify(totalQuantity));
};

// Calculate the total amount and quantity from products
const calculateTotals = (products: Product[]) => {
  const totalQuantity = products.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = products.reduce((sum, item) => sum + item.totalPrice, 0);
  return { totalAmount, totalQuantity };
};


const initialState: ProductState = {
  products: loadProductsFromLocalStorage(),
  totalAmount: loadTotalAmountFromLocalStorage(),
  totalQuantity: loadTotalQuantityFromLocalStorage(),
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
          totalPrice: newItem.price.default,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += existingItem.price.default;
      }

      
      const { totalAmount, totalQuantity } = calculateTotals(state.products);
      state.totalAmount = totalAmount;
      state.totalQuantity = totalQuantity;
      setItemFunc(state.products, state.totalAmount, state.totalQuantity);
    },

    
    removeItem(state, action: PayloadAction<string>) {
      const title = action.payload;
      const existingItem = state.products.find((item) => item.title === title);

      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.products = state.products.filter((item) => item.title !== title);
        } else {
          existingItem.quantity--;
          existingItem.totalPrice -= existingItem.price.default;
        }
      }

      
      const { totalAmount, totalQuantity } = calculateTotals(state.products);
      state.totalAmount = totalAmount;
      state.totalQuantity = totalQuantity;
      setItemFunc(state.products, state.totalAmount, state.totalQuantity);
    },

    
    deleteItem(state, action: PayloadAction<string>) {
      const title = action.payload;
      const existingItem = state.products.find((item) => item.title === title);

      if (existingItem) {
        state.products = state.products.filter((item) => item.title !== title);
      }

      
      const { totalAmount, totalQuantity } = calculateTotals(state.products);
      state.totalAmount = totalAmount;
      state.totalQuantity = totalQuantity;
      setItemFunc(state.products, state.totalAmount, state.totalQuantity);
    },

    
    clearShop(state) {
      state.products = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
      setItemFunc([], 0, 0);
    },
    setCartItems(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
  },
});

export const shopActions = shopSlice.actions;
export default shopSlice.reducer;
