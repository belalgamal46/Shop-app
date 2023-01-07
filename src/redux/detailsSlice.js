import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchProductById } from '../apis/shopService';

// Actions
const FETCH_PRODUCTS_BY_ID = 'shop/products/FETCH_PRODUCTS_BY_ID';

// Actions Creator
export const getProductsById = createAsyncThunk(FETCH_PRODUCTS_BY_ID, fetchProductById);

// Slice
const detailsSlice = createSlice({
  name: 'details',

  initialState: {
    singleProduct: {},
    error: '',
    isLoading: false,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getProductsById.pending, (state) => {
        const stateData = state;
        stateData.singleProduct = {};
        stateData.isLoading = true;
      })
      .addCase(getProductsById.fulfilled, (state, action) => {
        const stateData = state;
        stateData.singleProduct = action.payload;
        stateData.isLoading = false;
      })
      .addCase(getProductsById.rejected, (state, action) => {
        const stateData = state;
        stateData.singleProduct = {};
        stateData.isLoading = false;
        stateData.error = action.payload;
      });
  },
});
export default detailsSlice.reducer;
