import React from 'react';
import { render } from '@testing-library/react-native';
import { ProductInfo } from './ProductInfo';

jest.mock('./FavoriteButton', () => ({
  FavoriteButton: () => null
}));

describe('ProductInfo', () => {
  const mockProduct = {
    id: 1,
    title: 'Producto de prueba',
    price: 2000,
    description: 'Super veloz',
    rating: 4.5,
    category: 'Electronics',
    images: []
  } as any;

  it('renderiza todos los detalles del producto', () => {
    const { getByText } = render(<ProductInfo product={mockProduct} />);

    expect(getByText('Laptop Pro')).toBeTruthy();
    expect(getByText('$ 2000')).toBeTruthy();
    expect(getByText('Super rápida')).toBeTruthy();

    // Verificamos textos compuestos
    expect(getByText('Clasificación: 4.5')).toBeTruthy();
    expect(getByText('Categoría: Electronics')).toBeTruthy();
    expect(getByText('Descripción')).toBeTruthy();
  });
});
