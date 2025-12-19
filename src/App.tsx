import EmployeeTable from "./components/Employee/EmployeeTable";
import EmployeeListMobile from "./components/Employee/EmployeeList.mobile";
import Pagination from "./components/Pagination/Pagination";
import { useEmployees } from "./hooks/useEmployees";
import { useMediaQuery } from "./hooks/useMediaQuery";

function App() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { employees, page, setPage, loading, error } = useEmployees(isMobile);

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Employee Directory</h1>

      {!isMobile ? (
        <>
          <EmployeeTable datas={employees} />
          <Pagination page={page} setPage={setPage} />
        </>
      ) : (
        <EmployeeListMobile
          data={employees}
          loading={loading}
          onLoadMore={() => setPage((p) => p + 1)}
        />
      )}
    </div>
  );
}

export default App;
