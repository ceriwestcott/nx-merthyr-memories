import { render } from '@testing-library/react';

import { Button } from './Button';
import { fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Button label="Click me" onClick={() => {}} variant="primary" />
    );
    expect(baseElement).toBeTruthy();
  });

  describe('classes', () => {
    it('should render with correct classes', () => {
      const { getByText } = render(
        <Button label="Click me" onClick={() => {}} variant="primary" />
      );
      expect(getByText('Click me').className).contain('bg-blue-600 text-white');
    });

    it('should render with correct classes', () => {
      const { getByText } = render(
        <Button label="Click me" onClick={() => {}} variant="secondary" />
      );
      expect(getByText('Click me').className).contain('bg-white text-gray-800');
    });
  });
});
