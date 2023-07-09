import { useState } from "react";
import useHttp from "../../hook/use-http";
import Map from "../Map/Map";

const apiKey = import.meta.env.VITE_IPIFY_API_KEY;

function SearchInput() {
  const [ipAddress, setIpAddress] = useState("");
  const { data: resData, isLoading, latlng, clickHandler } = useHttp(ipAddress);

  const changeHandler = (event) => {
    setIpAddress(event.target.value);
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
        <p>Latitude: {latlng}</p>
        <p>Longitude: {latlng}</p>
      </div>
      <Map latlng={latlng}/>
    </>
  );
}

export default SearchInput;
