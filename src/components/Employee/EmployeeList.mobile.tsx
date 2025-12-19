import { memo } from "react";
import type { Employee } from "../../types/employee";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";
import EmployeeCard from "./EmployeeCard";

interface Props {
  data: Employee[];
  loading: boolean;
  onLoadMore: () => void;
}

function EmployeeListMobile(props: Props) {
  const { data, loading, onLoadMore } = props;
  const loadMoreRef = useInfiniteScroll(onLoadMore, loading);

  return (
    <div className="space-y-4">
      {data.map((e) => (
        <EmployeeCard key={e.login.uuid} employee={e} />
      ))}

      <div ref={loadMoreRef} className="h-10 flex justify-center">
        {loading && <span>Loading...</span>}
      </div>
    </div>
  );
}

export default memo(EmployeeListMobile);
