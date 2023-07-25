import classes from "./Attribution.module.css";

function Attribution() {
  return (
    <div className={classes.wrapper}>
      <div class={classes.attribution}>
        Challenge by {" "}
        <a
          href="https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/atmahana" target="_blank">Zubair Adham</a>.
      </div>
    </div>
  );
}

export default Attribution;
