import { useSelector } from 'react-redux';
import { Products } from '../../components';
import { Main, Title } from './styles/home';

const Home = () => {
  const isOpen = useSelector((state) => state.homeReducer.isActive);
  const categoryTitle = useSelector((state) => state.homeReducer.categoryTitle);
  const products = useSelector((state) => state.homeReducer.products);

  return (
    <Main isActive={isOpen}>
      <Title isActive={isOpen}>{`${categoryTitle} (${products.length})`} </Title>
      <Products />
    </Main>
  );
};

export default Home;
