import type { Employee } from "../types/employee";
import { EMPLOYEE_SEED, PAGE_SIZE } from "../utils/constants";

interface ApiResponse {
  results: Employee[];
}

export async function getEmployees(page: number): Promise<Employee[]> {
  const res = await fetch(
    `https://randomuser.me/api/?page=${page}&results=${PAGE_SIZE}&seed=${EMPLOYEE_SEED}`
  );

  if (!res.ok) {
    throw new Error("Network error");
  }

  const data: ApiResponse = await res.json();
  return data.results;
}
