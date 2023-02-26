import { useEffect, useState } from "react";

const useDebounce = (value: any, delay: number) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timoutId = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(timoutId);
    };
  }, [value, delay]);

  return debounceValue;
};

export default useDebounce;
