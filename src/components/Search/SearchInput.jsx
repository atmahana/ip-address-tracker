import { useState } from "react";

const apiKey = import.meta.env.VITE_IPIFY_API_KEY;

function SearchInput() {
  const [ipAddress, setIpAddress] = useState("");
  const [resData, setResData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const changeHandler = (event) => {
    setIpAddress(event.target.value);
  };

  const clickHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`
      );
      const data = await res.json();
      console.log(data);
      setResData(data);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  return (
    <>
      <input
        onChange={changeHandler}
        value={ipAddress}
        placeholder="Search for any IP address or domain"
      ></input>
      <button onClick={clickHandler}>
        {isLoading ? "Finding..." : "Search"}
      </button>
      <div>
        <h2>IP Details:</h2>
        <p>IP: {resData?.ip}</p>
        <p>
          Location: {resData?.location.city} {resData?.location.postalCode}
        </p>
        <p>Timezone: {resData?.location.timezone}</p>
        <p>ISP: {resData?.isp}</p>
      </div>
    </>
  );
}

export default SearchInput;
