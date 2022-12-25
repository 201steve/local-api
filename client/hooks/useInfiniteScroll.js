import { useRef, useEffect, useState, useCallback } from "react";

const useInfiniteScroll = (targetEl) => {
  const observerRef = useRef(null);
  const [isIntersecting, setisIntersecting] = useState(false);

  const getObserver = useCallback(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver((entries) =>
        setisIntersecting(entries.some((entry) => entry.isIntersecting))
      );
    }
    return observerRef.current;
  }, [observerRef.current]);

  useEffect(() => {
    if (targetEl.current) getObserver().observe(targetEl.current);

    return () => {
      getObserver().disconnect();
    };
  }, [targetEl.current]);

  return isIntersecting;
};
export default useInfiniteScroll;
