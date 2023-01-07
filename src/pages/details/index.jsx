import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getProductsById } from '../../redux/detailsSlice';
import {
  Container,
  ImageContainer,
  Image,
  DetailsContainer,
  Title,
  Description,
  Price,
  Category,
  Rate,
} from './styles/details';

const Details = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const product = useSelector((state) => state.detailsReducer.singleProduct);
  const isOpen = useSelector((state) => state.homeReducer.isActive);
  const { category, description, image, price, rating, title } = product;

  const productId = pathname.split('/')[3];
  useEffect(() => {
    dispatch(getProductsById(productId));
  }, [dispatch, productId]);

  return (
    <Container isActive={isOpen}>
      <ImageContainer>
        <Image src={image} alt={title} />
      </ImageContainer>
      <DetailsContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Price>Price: ${price}</Price>
        <Rate>Rate: {rating?.rate}</Rate>
        <Category>Category: {category}</Category>
      </DetailsContainer>
    </Container>
  );
};

export default Details;
