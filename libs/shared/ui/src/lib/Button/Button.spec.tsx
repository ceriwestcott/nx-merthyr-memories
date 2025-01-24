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

  it('should render with label', () => {
    const { getByText } = render(
      <Button label="Click me" onClick={() => {}} />
    );
    expect(getByText('Click me')).toBeTruthy();
  });

  it('should call onClick when clicked', () => {
    const onClick = vi.fn();
    const { getByText } = render(<Button label="Click me" onClick={onClick} />);
    fireEvent.click(getByText('Click me'));
    expect(onClick).toHaveBeenCalled();
  });
});
