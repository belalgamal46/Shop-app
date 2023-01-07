import { render } from '@testing-library/react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Details } from '../pages';

jest.mock('react-redux');
jest.mock('react-router-dom');

describe('Test Details Page components rendering', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('should render details page', async () => {
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);
    useLocation.mockReturnValue({ pathname: '/details/product/1' });
    useSelector.mockReturnValue({
      singleProduct: {
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
      isActive: false,
    });

    const tree = render(<Details />);
    expect(tree).toMatchSnapshot();
  });
});
