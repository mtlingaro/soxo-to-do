import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Filters } from '@components/home/filters';

import { FilterType } from '@models/todo';

jest.mock('@mui/icons-material/CheckCircleOutline', () => () => 'CheckCircleOutlineIcon');
jest.mock('@mui/icons-material/FormatListBulleted', () => () => 'FormatListBulletedIcon');
jest.mock('@mui/icons-material/RadioButtonUnchecked', () => () => 'RadioButtonUncheckedIcon');

describe('Filters component', () => {
  const testCases: { filter: FilterType; text: string }[] = [
    { filter: 'all', text: 'FormatListBulletedIcon' },
    { filter: 'active', text: 'RadioButtonUncheckedIcon' },
    { filter: 'completed', text: 'CheckCircleOutlineIcon' },
  ];

  it('renders all filter buttons', () => {
    render(<Filters filter="all" />);

    testCases.forEach(({ text }) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });

  it.each(testCases)('sets correct href for $filter filter', ({ filter, text }) => {
    render(<Filters filter="all" />);
    const link = screen.getByText(text).closest('a');
    expect(link).toHaveAttribute('href', `/?filter=${filter}`);
  });

  it.each(testCases)('applies correct styles when $filter is selected', ({ filter }) => {
    render(<Filters filter={filter} />);

    const links = screen.getAllByRole('link');
    const targetLink = links.find((link) => link.getAttribute('href') === `/?filter=${filter}`);
    expect(targetLink).toBeDefined();

    if (targetLink) {
      const span = targetLink.querySelector('span');
      expect(span).toHaveClass('MuiTouchRipple-root');
    }
  });

  it('does not highlight other filters when one is selected', () => {
    render(<Filters filter="active" />);

    const allLink = screen.getByText('FormatListBulletedIcon').closest('a');
    const completedLink = screen.getByText('CheckCircleOutlineIcon').closest('a');

    expect(allLink).toBeInTheDocument();
    expect(completedLink).toBeInTheDocument();

    if (allLink && completedLink) {
      expect(allLink).not.toHaveClass('MuiButton-colorPrimary');
      expect(completedLink).not.toHaveClass('MuiButton-colorPrimary');
    }
  });

  it('matches snapshot when no filter is selected', () => {
    const { asFragment } = render(<Filters filter="all" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('matches snapshot when filter is active', () => {
    const { asFragment } = render(<Filters filter="active" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
