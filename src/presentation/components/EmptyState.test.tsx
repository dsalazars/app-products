import React from 'react';
import { render } from '@testing-library/react-native';
import { EmptyState } from './EmptyState';

describe('EmptyState', () => {
  it('debe renderizar el texto correctamente', () => {
    const text = 'No hay datos';
    const { getByText } = render(<EmptyState text={text} />);
    expect(getByText(text)).toBeTruthy();
  });
});
