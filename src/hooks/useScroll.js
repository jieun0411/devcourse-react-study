import { useEffect, useRef } from "react";
import useRafState from "../stories/hooks/useRafState";

const useScroll = () => {
  const [state, setState] = useRafState({ x: 0, y: 0 });
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      setState({
        x: ref.current.scrollLeft,
        y: ref.current.scrollTop,
      });
    };

    // passive: 약간의 성능 최적화
    element.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      element.removeEventListener("scroll", handleScroll);
    };
  }, [ref, setState]);

  return [ref, state];
};

export default useScroll;
