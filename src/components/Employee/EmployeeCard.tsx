import type { Employee } from "../../types/employee";

interface Props {
  employee: Employee;
}

export default function EmployeeCard(props: Props) {
  const { employee } = props;

  return (
    <div className="bg-white rounded-lg shadow p-4 flex gap-4">
      <img src={employee.picture.medium} className="rounded-full" />
      <div>
        <p className="font-semibold">
          {employee.name.first} {employee.name.last}
        </p>
        <p className="text-sm text-gray-500">{employee.email}</p>
        <p className="text-sm">{employee.phone}</p>
      </div>
    </div>
  );
}
