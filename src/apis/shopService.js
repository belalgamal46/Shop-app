import axios from 'axios';

const baseUrl = 'https://fakestoreapi.com';

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${baseUrl}/products`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const fetchProductById = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/products/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${baseUrl}/products/categories`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const fetchProductsByCategory = async (category) => {
  try {
    const response = await axios.get(`${baseUrl}/products/category/${category}`);
    return response.data;
  } catch (error) {
    return error;
  }
};
