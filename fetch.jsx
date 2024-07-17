import { useEffect, useState } from "react";

const useFetch = (api) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const apiData = async () => {
      try {
        const data = await fetch(api);
        const res = await data.json();
        setData(res);
      } catch (error) {
        setError("api is not found plz put api in useFetch(___)");
      } finally {
        setLoading(false);
      }
    };
    apiData();
  }, [api]);
  return { data, error, loading };
};
export default useFetch;
