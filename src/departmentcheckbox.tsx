import { useState } from 'react';
import { Typography, Box, Checkbox } from '@mui/material';

interface Department {
  id: number;
  name: string;
  subDepartments: SubDepartment[];
}

interface SubDepartment {
  id: number;
  name: string;
}

interface DepartmentCheckboxProps {
  department: Department;
  selectedSubDepartments: number[];
  onSelectDepartment: (departmentId: number, selected: boolean) => void;
  onSelectSubDepartment: (subDepartmentId: number, selected: boolean) => void;
}

const DepartmentCheckbox: React.FC<DepartmentCheckboxProps> = ({
  department,
  selectedSubDepartments,
  onSelectDepartment,
  onSelectSubDepartment,
}) => {
  const { id, name, subDepartments } = department;
  const [expanded, setExpanded] = useState(false);

  const handleDepartmentSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSelectDepartment(id, event.target.checked);
  };

  const handleSubDepartmentSelect = (subDepartmentId: number, event: React.ChangeEvent<HTMLInputElement>) => {
    onSelectSubDepartment(subDepartmentId, event.target.checked);
  };

  const handleToggleExpand = () => {
    setExpanded((prevState) => !prevState);
  };

  const isDepartmentSelected = selectedSubDepartments.includes(id);
  const areAllSubDepartmentsSelected = subDepartments.every((subDepartment) =>
    selectedSubDepartments.includes(subDepartment.id)
  );

  return (
    <Box key={id} ml={2}>
      <Checkbox
        checked={isDepartmentSelected}
        indeterminate={!areAllSubDepartmentsSelected && isDepartmentSelected}
        onChange={handleDepartmentSelect}
      />
      <Typography variant="body1">{name}</Typography>
      {subDepartments.length > 0 && (
        <Typography
          variant="body2"
          color="textSecondary"
          onClick={handleToggleExpand}
          sx={{ cursor: 'pointer' }}
        >
          {expanded ? 'Collapse' : 'Expand'}
        </Typography>
      )}
      {expanded &&
        subDepartments.map((subDepartment) => (
          <Box key={subDepartment.id} ml={4}>
            <Checkbox
              checked={selectedSubDepartments.includes(subDepartment.id)}
              onChange={(event) => handleSubDepartmentSelect(subDepartment.id, event)}
            />
            <Typography variant="body1">{subDepartment.name}</Typography>
          </Box>
        ))}
    </Box>
  );
};

export default DepartmentCheckbox;
