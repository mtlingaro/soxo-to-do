'use client';

import { Button } from '@mui/material';

import Link from 'next/link';

import { FilterType } from '@models/todo';

interface IProps {
  value: FilterType;
  icon: React.ReactNode;
  isSelected: boolean;
}

export const LinkButton: React.FC<IProps> = ({ value, icon, isSelected }) => (
  <Button
    component={Link}
    href={`/?filter=${value}`}
    color={isSelected ? 'primary' : 'inherit'}
    sx={{
      bgcolor: isSelected ? 'action.selected' : 'inherit',
      '&:hover': {
        bgcolor: isSelected ? 'action.hover' : undefined,
      },
    }}
  >
    {icon}
  </Button>
);
