import { memo } from "react";
import type { Employee } from "../../types/employee";

interface Props {
  datas: Employee[];
}

function EmployeeTable(prop: Props) {
  const { datas } = prop;

  return (
    <div className="bg-white rounded-sm">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-100 text-gray-600">
            <th className="px-4 py-3 text-left font-semibold">Avatar</th>
            <th className="px-4 py-3 text-left font-semibold">Full Name</th>
            <th className="px-4 py-3 text-left font-semibold">Email</th>
            <th className="px-4 py-3 text-left font-semibold">Phone</th>
            <th className="px-4 py-3 text-left font-semibold">Location</th>
          </tr>
        </thead>

        <tbody>
          {datas.map((employee) => (
            <tr
              key={employee.login.uuid}
              className="border-b border-gray-200 last:border-b-0"
            >
              <td className="px-4 py-3">
                <img
                  src={employee.picture.thumbnail}
                  alt="avatar"
                  className="h-12 w-12 rounded border border-gray-300"
                />
              </td>

              <td className="px-4 py-3 text-gray-900">
                {employee.name.first} {employee.name.last}
              </td>

              <td className="px-4 py-3 text-gray-700">{employee.email}</td>

              <td className="px-4 py-3 text-gray-700">{employee.phone}</td>

              <td className="px-4 py-3 text-gray-700">
                {employee.location.city}, {employee.location.state}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default memo(EmployeeTable);
