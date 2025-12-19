import { useCallback, useEffect, useState } from "react";
import { getEmployees } from "../api/employee.api";
import type { Employee } from "../types/employee";

export function useEmployees(isMobile: boolean) {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await getEmployees(page);
      setEmployees((prev) => (isMobile ? [...prev, ...data] : data));
    } catch (e) {
      setError("Failed to fetch employees");
    } finally {
      setLoading(false);
    }
  }, [page, isMobile]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    employees,
    page,
    setPage,
    loading,
    error,
  };
}
