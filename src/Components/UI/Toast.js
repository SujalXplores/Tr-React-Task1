import classes from "./Toast.module.css";

const Toast = (props) => {
  let toastType = ``;
  switch (props.type) {
    case "success":
      toastType = `hsl(120, 68%, 42%)`;
      break;
    case "info":
      toastType = `hsl(270, 49%, 50%)`;
      break;
    case "warn":
      toastType = `hsl(0, 73%, 55%)`;
      break;
    default:
      toastType = `hsl(0, 0%, 13%)`;
      break;
  }
  return (
    <div
      className={`${classes.toast} ${toastType}`}
      style={{ color: `${toastType}` }}
    >
      {props.message}
    </div>
  );
};

export default Toast;
