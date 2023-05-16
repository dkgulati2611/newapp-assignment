import { useState } from 'react';
import { Typography } from '@mui/material';
import DepartmentCheckbox from './departmentcheckbox';

const DEPARTMENTS = [
  {
    id: 1,
    name: 'customer_service',
    subDepartments: [
      {
        id: 1.1,
        name: 'support',
      },
      {
        id: 1.2,
        name: 'customer_success',
      },
    ],
  },
  {
    id: 2,
    name: 'design',
    subDepartments: [
      {
        id: 2.1,
        name: 'graphic_design',
      },
      {
        id: 2.2,
        name: 'product_design',
      },
      {
        id: 2.3,
        name: 'web_design',
      }
    ],
  },
];

const Department = () => {
  const [selectedSubDepartments, setSelectedSubDepartments] = useState<number[]>([]);

  const handleDepartmentSelect = (departmentId: number, selected: boolean) => {
    let updatedSubDepartments: number[] = [...selectedSubDepartments];

    if (selected) {
      const department = DEPARTMENTS.find((dep) => dep.id === departmentId);
      if (department) {
        updatedSubDepartments = [
          ...updatedSubDepartments,
          department.id,
          ...department.subDepartments.map((subDep) => subDep.id),
        ];
      }
    } else {
      const department = DEPARTMENTS.find((dep) => dep.id === departmentId);
      if (department) {
        updatedSubDepartments = updatedSubDepartments.filter(
          (subDepId) => !department.subDepartments.map((subDep) => subDep.id).includes(subDepId)
        );
      }
    }
    setSelectedSubDepartments(updatedSubDepartments);
  };

  const handleSubDepartmentSelect = (subDepartmentId: number, selected: boolean) => {
    let updatedSubDepartments: number[] = [...selectedSubDepartments];
    if (selected) {
      updatedSubDepartments.push(subDepartmentId);
    } else {
      updatedSubDepartments = updatedSubDepartments.filter((subDepId) => subDepId !== subDepartmentId);
    }
    setSelectedSubDepartments(updatedSubDepartments);
  };

  return (
    <div>
      <Typography variant="h4">Departments and Sub-Departments</Typography>
      {DEPARTMENTS.map((department) => (
        <DepartmentCheckbox
          key={department.id}
          department={department}
          selectedSubDepartments={selectedSubDepartments}
          onSelectDepartment={handleDepartmentSelect}
          onSelectSubDepartment={handleSubDepartmentSelect}
        />
      ))}
    </div>
  );
};

export default Department;
