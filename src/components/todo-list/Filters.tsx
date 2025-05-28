import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Tooltip from '@mui/material/Tooltip';

import { FilterType } from '@models/todo';

type FiltersProps = {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
};

export const Filters: React.FC<FiltersProps> = ({ currentFilter, onFilterChange }) => {
  const handleFilterChange = (event: React.MouseEvent<HTMLElement>, newFilter: FilterType) => {
    if (newFilter !== null) {
      onFilterChange(newFilter);
    }
  };

  return (
    <ToggleButtonGroup
      value={currentFilter}
      exclusive
      onChange={handleFilterChange}
      aria-label="todo filter"
      fullWidth
    >
      <ToggleButton value="all" aria-label="all">
        <Tooltip title="Show all tasks">
          <FormatListBulletedIcon />
        </Tooltip>
      </ToggleButton>
      <ToggleButton value="active" aria-label="active">
        <Tooltip title="Show active tasks">
          <RadioButtonUncheckedIcon />
        </Tooltip>
      </ToggleButton>
      <ToggleButton value="completed" aria-label="completed">
        <Tooltip title="Show completed tasks">
          <CheckCircleOutlineIcon />
        </Tooltip>
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
