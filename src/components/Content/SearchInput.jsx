import classes from "./SearchInput.module.css";
import LoadingIcon from "../../assets/loading.svg";
import ArrowIcon from "../../assets/icon-arrow.svg";

function SearchInput({ value, onChange, isLoading, onClick }) {
  return (
    <>
      <div className={classes.wrapper}>
        <input
          onChange={onChange}
          value={value}
          placeholder="Search for any IP address or domain"
          className={classes.search}
        ></input>

        <button className={classes.btn} onClick={onClick}>
          {isLoading ? <img src={LoadingIcon} /> : <img src={ArrowIcon} />}
        </button>
      </div>
    </>
  );
}

export default SearchInput;
