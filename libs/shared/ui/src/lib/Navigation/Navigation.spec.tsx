import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Navigation } from './Navigation';

describe('Navigation', () => {
  it('renders successfully', () => {
    const { baseElement } = render(
      <MemoryRouter>
        <Navigation title="Merthyr Memories" links={[]} />
      </MemoryRouter>
    );
    expect(baseElement).toBeTruthy();
  });

  it('renders with correct title', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Navigation title="Merthyr Memories" links={[]} />
      </MemoryRouter>
    );
    expect(getByText('Merthyr Memories')).toBeTruthy();
  });

  it('renders default navigation items', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Navigation title="Merthyr Memories" links={[]} />
      </MemoryRouter>
    );
    expect(getByText('Home')).toBeTruthy();
    expect(getByText('Locations')).toBeTruthy();
    expect(getByText('Stories')).toBeTruthy();
  });

  // it('renders with custom links when provided', () => {
  //   const customLinks = [{ label: 'Custom Page', to: '/custom' }];
  //   const { getByText } = render(
  //     <MemoryRouter>
  //       <Navigation title="Merthyr Memories" links={customLinks} />
  //     </MemoryRouter>
  //   );
  //   expect(getByText('Custom Page')).toBeTruthy();
  // });
});
