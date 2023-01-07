import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import {
  getCategories,
  isActive,
  getProductsByCategory,
  getProducts,
  swapCategoryTitle,
} from '../../redux/homeSlice';
import { isActive as isOpened } from '../../redux/detailsSlice';

import {
  Logo,
  Container,
  Header,
  NavLinks,
  Li,
  BurgerButton,
  BurgerInnerContainer,
  CloseButton,
  BurgerNavContainer,
  BackButton,
} from './styles/navbar';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const homeReducer = useSelector((state) => state.homeReducer);
  const { categories, isActive: isOpen, categoryTitle } = homeReducer;
  useEffect(() => {
    if (categories.length === 0) dispatch(getCategories());
  }, [categories.length, dispatch]);

  const handleBurgerButtonClick = () => {
    dispatch(isActive());
    dispatch(isOpened());
  };

  const handleNavLinksClick = (event, category) => {
    dispatch(getProductsByCategory(category));

    const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1);

    if (!location.pathname.includes('/details')) {
      dispatch(swapCategoryTitle(categoryTitle));
      dispatch(isActive());
    }

    if (location.pathname.includes('/details')) {
      dispatch(swapCategoryTitle(categoryTitle));
      dispatch(isActive());
    }

    navigate('/');
  };

  const category = categories?.map((category) => {
    const isSelected = category === categoryTitle.charAt(0).toLowerCase() + categoryTitle.slice(1);
    const isDetails = location.pathname.includes('/details');

    return (
      <Li
        key={category}
        onClick={(event) => handleNavLinksClick(event, category)}
        isDetails={isDetails}
        isSelected={isSelected}
        isOpen={isOpen}
      >
        {category}
      </Li>
    );
  });

  const getAllProducts = () => {
    dispatch(getProducts());
    dispatch(swapCategoryTitle('All Products'));
  };

  return (
    <>
      <Header isActive={isOpen}>
        <Container>
          <BurgerInnerContainer isVisible={location.pathname.includes('/details')}>
            {location.pathname.includes('/details') ? (
              <BackButton onClick={() => navigate('/')}>Back</BackButton>
            ) : (
              ''
            )}

            <Logo onClick={getAllProducts}>
              <NavLink to="/">Shop</NavLink>
            </Logo>
            <BurgerButton onClick={handleBurgerButtonClick}>
              <GiHamburgerMenu />
            </BurgerButton>
          </BurgerInnerContainer>
          <BurgerNavContainer isActive={isOpen}>
            <CloseButton onClick={handleBurgerButtonClick}>
              <MdClose />
            </CloseButton>
            <NavLinks>{category}</NavLinks>
          </BurgerNavContainer>
        </Container>
      </Header>

      <Outlet />
    </>
  );
};

export default Navbar;
