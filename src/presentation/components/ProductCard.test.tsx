
import { render, fireEvent } from '@testing-library/react-native';
import { ProductCard } from './ProductCard';
import { Product } from '../../domain/entities/Product';

jest.mock('./FavoriteButton', () => ({
  FavoriteButton: () => null
}));

describe('ProductCard', () => {
  const mockProduct = {
    id: 1,
    title: 'iPhone X',
    price: 999,
    description: 'Un gran teléfono',
    images: ['https://ejemplo.com/imagen.jpg']
  } as Product;

  it('renderiza la información del producto correctamente', () => {
    const { getByText } = render(<ProductCard product={mockProduct} />);

    expect(getByText('iPhone X')).toBeTruthy();
    expect(getByText('$999')).toBeTruthy();
    expect(getByText('Un gran teléfono')).toBeTruthy();
  });

  it('llama a onPress cuando se presiona la tarjeta', () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <ProductCard product={mockProduct} onPress={mockOnPress} />
    );

    // Simulamos el toque en el título (que es parte del área tocable)
    fireEvent.press(getByText('iPhone X'));

    expect(mockOnPress).toHaveBeenCalled();
  });
});
