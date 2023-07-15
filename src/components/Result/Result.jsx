import classes from "./Result.module.css";

function Result(props) {
  const city = props.city ? props.city + ', ' : '';
  const region = props.region ? props.region + ' ' : '';
  const postalCode = props.postalCode ? props.postalCode : '';

  const location = city + region + postalCode;

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.item}>
          <h2 className={classes.title}>IP ADDRESS</h2>
          <span className={classes.content}>{props.ip ? props.ip : "-"}</span>
        </div>
        <div className={classes.item}>
          <h2 className={classes.title}>LOCATION</h2>
          <span className={classes.content}>{location ? location : '-'}</span>
        </div>
        <div className={classes.item}>
          <h2 className={classes.title}>TIMEZONE</h2>
          <span className={classes.content}>
            {props.timezone ? "UTC " + props.timezone : "-"}
          </span>
        </div>
        <div className={classes.item}>
          <h2 className={classes.title}>ISP</h2>
          <span className={classes.content}>{props.isp ? props.isp : "-"}</span>
        </div>
      </div>
    </>
  );
}

export default Result;
