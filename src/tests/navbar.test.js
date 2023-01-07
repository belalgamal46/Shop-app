import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/navbar';

jest.mock('react-redux');

describe('Test Navbar Component', () => {
  test('Should render navbar', () => {
    useSelector.mockReturnValue({
      categories: ['electronics', 'jewelery', "men's clothing", "women's clothing"],
      isActive: false,
      isLoading: false,
    });
    const tree = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(tree).toMatchSnapshot();
  });
});
