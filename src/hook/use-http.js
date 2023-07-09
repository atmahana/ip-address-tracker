import { useState } from "react";

const apiKey = import.meta.env.VITE_IPIFY_API_KEY;

const useHttp = (ipAddress) => {
  const [isLoading, setIsLoading] = useState(false);
  const [latlng, setLatlng] = useState(null);
  const [data, setResData] = useState(null);
  const [error, setError] = useState(null);

  const clickHandler = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`
      );
      const data = await res.json();
      setResData(data);
      setLatlng([data.location.lat, data.location.lng]);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  };

  return {
    data,
    latlng,
    isLoading,
    error,
    clickHandler,
  };
};

export default useHttp;
