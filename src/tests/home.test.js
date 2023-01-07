import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { Products, Product } from '../components';
import { Home } from '../pages';

jest.mock('react-redux');
jest.mock('react-router-dom');

describe('Test Home components rendering', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should render Products component', () => {
    useSelector.mockReturnValue({
      isLoading: false,
      products: [
        {
          category: 'electronics',
          description: 'test',
          id: 14,
          image: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
          price: 999.99,
          title: 'title',
          rating: {
            rate: 2.2,
            count: 140,
          },
        },
      ],
      isActive: false,
    });
    const tree = render(<Products />);
    expect(tree).toMatchSnapshot();
  });

  test('should render Home page', () => {
    useSelector.mockReturnValue({
      isActive: false,
      categoryTitle: 'electronics',
      products: [
        {
          category: 'electronics',
          description: 'test',
          id: 14,
          image: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
          price: 999.99,
          title: 'title',
          rating: {
            rate: 2.2,
            count: 140,
          },
        },
      ],
    });

    const tree = render(<Home />);
    expect(tree).toMatchSnapshot();
  });

  test('should render Product', () => {
    const product = {
      category: 'electronics',
      description: 'test',
      id: 14,
      image: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
      price: 999.99,
      title: 'title',
      rating: {
        rate: 2.2,
        count: 140,
      },
    };
    const tree = render(<Product product={product} />);
    expect(tree).toMatchSnapshot();
  });
});
