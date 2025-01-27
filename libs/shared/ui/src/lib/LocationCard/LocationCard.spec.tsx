import { fireEvent, render } from '@testing-library/react';
import { LocationCard } from './LocationCard';
import { describe, it, expect, vi } from 'vitest';
import { Location } from '@merthyr-memories/utils';

describe('LocationCard', () => {
  const mockData: Location = {
    _id: '1',
    id: '1',
    name: 'Twyn',
    imageUrl:
      'http://www.alangeorge.co.uk/e-comon/Images_Q-T/MerthyrTydfil_Thomastown_RecreationGround.jpg',
  };

  const mockOnClick = vi.fn();

  it('should render', () => {
    render(<LocationCard location={mockData} onClick={mockOnClick} />);
  });

  it('should render the location name', () => {
    const { getByText } = render(
      <LocationCard location={mockData} onClick={mockOnClick} />
    );
    expect(getByText('Twyn')).toBeTruthy();
  });

  it('should call onClick when clicked', () => {
    const { getByText } = render(
      <LocationCard location={mockData} onClick={mockOnClick} />
    );
    fireEvent.click(getByText('Twyn'));
    expect(mockOnClick).toHaveBeenCalled();
  });
});
