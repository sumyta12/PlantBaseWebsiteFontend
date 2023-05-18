import { useEffect, useState } from "react";

const UseEffectHook = (params) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    let set = false;
    if (!set) {
      fetch(params)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    }
    return () => {
      set = true;
    };
  }, [params]);
  return [data, setData];
};

export default UseEffectHook;
