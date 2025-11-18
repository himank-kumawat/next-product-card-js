import { render, screen } from '@testing-library/react';
import ProductCard from '@/components/ProductCard';

const product = {
  title: 'Test Product',
  description: 'Short description',
  price: 19.99,
  rating: 4.5,
  imageUrl: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=900&q=80',
  inStock: true,
  onSale: true,
};

describe('ProductCard', () => {
  it('renders product information', () => {
    render(<ProductCard product={product} />);

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('Short description')).toBeInTheDocument();
    expect(screen.getByText('₹19.99')).toBeInTheDocument();
    expect(screen.getByText('4.5')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Buy Now' })).toBeInTheDocument();
    expect(screen.getByAltText('Test Product')).toBeInTheDocument();
  });
});