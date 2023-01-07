import { useSelector } from 'react-redux';
import { Products } from '../../components';
import { Main, Title } from './styles/home';

const Home = () => {
  const homeReducer = useSelector((state) => state.homeReducer);
  const { isActive: isOpen, categoryTitle, products } = homeReducer;

  return (
    <Main isActive={isOpen}>
      <Title isActive={isOpen}>{`${categoryTitle} (${products.length})`} </Title>
      <Products />
    </Main>
  );
};

export default Home;
