import { Button } from "react-bootstrap";
import classes from "./SaveButton.module.css";

function SaveButton() {
  return (
    <Button variant="outline-light" className={classes.button} type="submit">
      Save
    </Button>
  );
}

export default SaveButton;
