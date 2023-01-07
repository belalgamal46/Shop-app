import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchProducts, fetchCategories, fetchProductsByCategory } from '../apis/shopService';

// Actions
const FETCH_PRODUCTS = 'shop/products/FETCH_PRODUCTS';
const FETCH_CATOGRIES = 'shop/categories/FETCH_CATOGRIES';
const FETCH_PRODUCTS_BY_CATEGORY = 'shop/categories/FETCH_PRODUCTS_BY_CATEGORY';

// Actions Creator
export const getProducts = createAsyncThunk(FETCH_PRODUCTS, fetchProducts);
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
      .addCase(getProducts.pending, (state) => {
        const stateData = state;
        stateData.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        const stateData = state;
        stateData.isLoading = false;
        stateData.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        const stateData = state;
        stateData.isLoading = false;
        stateData.error = action.payload;
        stateData.products = [];
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        const stateData = state;
        stateData.categories = action.payload;
        stateData.isLoading = false;
      })
      .addCase(getProductsByCategory.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getProductsByCategory.fulfilled, (state, action) => {
        const stateData = state;
        stateData.products = action.payload;
        stateData.isLoading = false;
      })
      .addCase(getProductsByCategory.rejected, (state, action) => {
        const stateData = state;
        stateData.products = [];
        stateData.isLoading = false;
        stateData.error = action.payload;
      });
  },
});

export default homeSlice.reducer;
export const { isActive, swapCategoryTitle } = homeSlice.actions;
