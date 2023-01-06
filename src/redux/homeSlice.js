import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  fetchProducts,
  fetchProductById,
  fetchCategories,
  fetchProductsByCategory,
} from '../apis/shopService';

// Actions
const FETCH_PRODUCTS = 'shop/products/FETCH_PRODUCTS';
const FETCH_PRODUCTS_BY_ID = 'shop/products/FETCH_PRODUCTS_BY_ID';
const FETCH_CATOGRIES = 'shop/categories/FETCH_CATOGRIES';
const FETCH_PRODUCTS_BY_CATEGORY = 'shop/categories/FETCH_PRODUCTS_BY_CATEGORY';

// Actions Creator
export const getProducts = createAsyncThunk(FETCH_PRODUCTS, fetchProducts);
export const getProductsById = createAsyncThunk(FETCH_PRODUCTS_BY_ID, fetchProductById);
export const getCategories = createAsyncThunk(FETCH_CATOGRIES, fetchCategories);
export const getProductsByCategory = createAsyncThunk(
  FETCH_PRODUCTS_BY_CATEGORY,
  fetchProductsByCategory
);

// Slice
const homeSlice = createSlice({
  name: 'home',
  initialState: {
    products: [],
    categories: [],
    categoryTitle: 'All Products',
    isLoading: false,
    isActive: false,
    error: '',
  },

  reducers: {
    isActive: (state) => ({
      ...state,
      isActive: !state.isActive,
    }),

    swapCategoryTitle: (state, action) => ({
      ...state,
      categoryTitle: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => ({
        ...state,
        products: action.payload,
        isLoading: false,
      }))
      .addCase(getProducts.pending, (state) => ({
        ...state,
        products: [],
        isLoading: true,
      }))
      .addCase(getProducts.rejected, (state, action) => ({
        ...state,
        products: [],
        isLoading: false,
        error: action.payload,
      }))
      .addCase(getCategories.fulfilled, (state, action) => ({
        ...state,
        categories: action.payload,
        isLoading: false,
      }))
      .addCase(getProductsByCategory.fulfilled, (state, action) => ({
        ...state,
        products: action.payload,
        isLoading: false,
      }))
      .addCase(getProductsByCategory.pending, (state) => ({
        ...state,
        products: [],
        isLoading: true,
      }))
      .addCase(getProductsByCategory.rejected, (state, action) => ({
        ...state,
        products: [],
        isLoading: false,
        error: action.payload,
      }));
  },
});

export default homeSlice.reducer;
export const { isActive, swapCategoryTitle } = homeSlice.actions;
