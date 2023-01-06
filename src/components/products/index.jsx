import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/homeSlice';
import Product from '../product';
import { Container, List } from './styles/products';

const Products = () => {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.homeReducer.products);
  const isLoading = useSelector((state) => state.homeReducer.isLoading);
  const isOpen = useSelector((state) => state.homeReducer.isActive);

  useEffect(() => {
    if (productsList.length === 0) dispatch(getProducts());
  }, [dispatch, productsList.length]);

  const product = productsList?.map((product) => <Product key={product.id} product={product} />);

  return (
    <Container isActive={isOpen}>
      <List>{isLoading ? 'Loading...' : product}</List>
    </Container>
  );
};

export default Products;
