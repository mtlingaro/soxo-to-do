import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { ButtonGroup } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';

import { LinkButton } from '@components/home/filters/LinkButton';

import { FilterType } from '@models/todo';

const FILTERS: { label: string; value: FilterType; icon: React.ReactNode }[] = [
  { label: 'Show all tasks', value: 'all', icon: <FormatListBulletedIcon /> },
  { label: 'Show active tasks', value: 'active', icon: <RadioButtonUncheckedIcon /> },
  { label: 'Show completed tasks', value: 'completed', icon: <CheckCircleOutlineIcon /> },
];

interface IProps {
  filter: FilterType;
}

export const Filters = ({ filter }: IProps) => {
  return (
    <ButtonGroup fullWidth variant="outlined">
      {FILTERS.map(({ label, value, icon }) => {
        const isSelected = filter === value;

        return (
          <Tooltip key={value} title={label} arrow>
            <LinkButton value={value} icon={icon} isSelected={isSelected} />
          </Tooltip>
        );
      })}
    </ButtonGroup>
  );
};
