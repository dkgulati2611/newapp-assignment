import { useState } from 'react';
import { Typography, Box, Checkbox } from '@mui/material';
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
  const [selectedSubDepartments, setSelectedSubDepartments] = useState([]);

  const handleDepartmentSelect = (departmentId, selected) => {
    let updatedSubDepartments = [...selectedSubDepartments];
    if (selected) {
      const department = DEPARTMENTS.find((dep) => dep.id === departmentId);
      updatedSubDepartments = [...selectedSubDepartments, department.id, ...department.subDepartments.map((subDep) => subDep.id)];
    } else {
      const department = DEPARTMENTS.find((dep) => dep.id === departmentId);
      updatedSubDepartments = updatedSubDepartments.filter(
        (subDepId) => !department.subDepartments.map((subDep) => subDep.id).includes(subDepId)
      );
    }
    setSelectedSubDepartments(updatedSubDepartments);
  };

  const handleSubDepartmentSelect = (subDepartmentId, selected) => {
    let updatedSubDepartments = [...selectedSubDepartments];
    if (selected) {
      updatedSubDepartments.push(subDepartmentId);
    } else {
      updatedSubDepartments= updatedSubDepartments.filter((subDepId) => subDepId !== subDepartmentId);
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
