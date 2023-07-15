import { useState } from "react";
import useHttp from "../../hook/use-http";
import Result from "../Result/Result";
import classes from "./SearchInput.module.css";
import ArrowIcon from "../../assets/icon-arrow.svg";
import LoadingIcon from '../../assets/loading.svg';

const apiKey = import.meta.env.VITE_IPIFY_API_KEY;

function SearchInput() {
  const [ipAddress, setIpAddress] = useState("");
  const { data: resData, isLoading, latlng, clickHandler } = useHttp(ipAddress);

  const changeHandler = (event) => {
    setIpAddress(event.target.value);
  };

  return (
    <>
      <div className={classes.wrapper}>
        <input
          onChange={changeHandler}
          value={ipAddress}
          placeholder="Search for any IP address or domain"
          className={classes.search}
        ></input>

        <button className={classes.btn} onClick={clickHandler}>
          {isLoading ? <img src={LoadingIcon}/> : <img src={ArrowIcon} />}
        </button>
      </div>
      <Result
        ip={resData?.ip}
        city={resData?.location.city}
        region={resData?.location.region}
        postalCode={resData?.location.postalCode}
        timezone={resData?.location.timezone}
        isp={resData?.isp}
      />
    </>
  );
}

export default SearchInput;
