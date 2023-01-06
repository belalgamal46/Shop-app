import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Image,
  Title,
  Price,
  Rating,
  DetailsContainer,
  ImageContainer,
  InnerDetailsContainer,
} from './styles/product';

const Product = ({ product }) => {
  const { title, image, price, rating } = product;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/details');
  };

  return (
    <Container onClick={handleClick}>
      <ImageContainer>
        <Image src={image} alt={title} />
      </ImageContainer>
      <DetailsContainer>
        <Title>{title}</Title>
        <InnerDetailsContainer>
          <Price>${price}</Price>
          <Rating>Rate {rating.rate}</Rating>
        </InnerDetailsContainer>
      </DetailsContainer>
    </Container>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.shape({
      rate: PropTypes.number,
      count: PropTypes.number,
    }),
  }).isRequired,
};

export default Product;
