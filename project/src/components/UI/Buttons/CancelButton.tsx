import { useState } from "react";
import { Button } from "react-bootstrap";
import classes from "./CancelButton.module.css";
import LeavingModal from "../Modals/LeavingModal";

function CancelButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button
        variant="outline-light"
        className={classes.button}
        onClick={handleShow}
      >
        Cancel
      </Button>
      <LeavingModal show={show} onClose={handleClose} />
    </div>
  );
}

export default CancelButton;
