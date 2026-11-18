import { useState, useEffect } from "react";

const BASE_URL = "http://127.0.0.1:8000";

function useFetch(endpoint) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setError] = useState(null);
  useEffect(() => {
    async function fetchData() {
      // setLoading(true);
      try {
        // const formatEndpoint = endpoint.endsWith("/")
        //   ? endpoint
        //   : `${endpoint}/`;
        const res = await fetch(`${BASE_URL}${endpoint}`);
        if (!res.ok) {
          throw new Error(`Http error ! status : ${res.status}`);
        }
        const result = await res.json();
        setData(result);
        setError(null);
      } catch (err) {
        console.error(`Error fetching from ${endpoint}:`, err);
        setError(err.messsage);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [endpoint]);

  return { data, loading, err };
}

export default useFetch;
