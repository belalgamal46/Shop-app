import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/homeSlice';
import Product from '../product';
import { Container, List, Spinner } from './styles/products';

const Products = () => {
  const dispatch = useDispatch();
  const homeReducer = useSelector((state) => state.homeReducer);
  const { isLoading, products: productsList, isActive: isOpen } = homeReducer;

  useEffect(() => {
    if (productsList.length === 0) dispatch(getProducts());
  }, [dispatch, productsList.length]);

  const product = productsList?.map((product) => <Product key={product.id} product={product} />);

  return (
    <Container isActive={isOpen}>
      {isLoading ? <Spinner>Loading...</Spinner> : <List>{product}</List>}
    </Container>
  );
};

export default Products;
