import React from 'react';
import { render } from '@testing-library/react-native';
import { ProductInfo } from './ProductInfo';
import { Product } from '../../domain/entities/Product';

jest.mock('./FavoriteButton', () => ({
  FavoriteButton: () => null
}));

describe('ProductInfo', () => {
  const mockProduct = {
    id: 1,
    title: 'Laptop asus',
    price: 2000,
    description: 'Super rapida',
    rating: 4.5,
    category: 'Electronics',
    images: ['https://ejemplo.com/imagen.jpg']
  } as Product;

  it('renderiza todos los detalles del producto', () => {
    const { getByText } = render(<ProductInfo product={mockProduct} />);

    expect(getByText('Laptop asus')).toBeTruthy();
    expect(getByText('$ 2000')).toBeTruthy();
    expect(getByText('Super rapida')).toBeTruthy();
    expect(getByText('Clasificación: 4.5')).toBeTruthy();
    expect(getByText('Categoría: Electronics')).toBeTruthy();
    expect(getByText('Descripción')).toBeTruthy();
  });
});
