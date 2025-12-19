import { useEffect, useRef } from "react";

export function useInfiniteScroll(onLoadMore: () => void, disabled: boolean) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (disabled) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        onLoadMore();
      }
    });

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [onLoadMore, disabled]);

  return ref;
}
