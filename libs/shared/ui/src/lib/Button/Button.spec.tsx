import { render } from '@testing-library/react';
import { Button } from './Button';
import { describe, it, expect } from 'vitest';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Button label="Click me" variant="primary" />
    );
    expect(baseElement).toBeTruthy();
  });

  describe('classes', () => {
    it('should render with correct classes', () => {
      const { getByText } = render(
        <Button label="Click me" variant="primary" />
      );
      expect(getByText('Click me').className).contain('bg-blue-600 text-white');
    });

    it('should render with correct classes', () => {
      const { getByText } = render(
        <Button label="Click me"  variant="secondary" />
      );
      expect(getByText('Click me').className).contain('bg-white text-gray-800');
    });
  });
});
