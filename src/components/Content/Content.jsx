import Map from "../Map/Map";
import Result from "./Result";
import Header from "../Header";
import SearchInput from "./SearchInput";
import useHttp from "../../hook/use-http";
import { useState } from "react";
import classes from "./Content.module.css";

function Content() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const {
    data: resData,
    latlng,
    isLoading,
    clickHandler,
  } = useHttp(inputValue);

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>IP Address Tracker</h1>
      <div className={classes.background}>
        <Header />
        <Map latlng={latlng} />
      </div>
      <div className={classes.foreground}>
        <SearchInput
          value={inputValue}
          isLoading={isLoading}
          onChange={handleInputChange}
          onClick={clickHandler}
        />
        <Result
          ip={resData?.ip}
          city={resData?.location.city}
          region={resData?.location.region}
          postalCode={resData?.location.postalCode}
          timezone={resData?.location.timezone}
          isp={resData?.isp}
        />
      </div>
    </div>
  );
}

export default Content;
