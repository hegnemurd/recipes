import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router";

import classes from "./LeavingModal.module.css";

const LeavingModal = (props: any) => {
  const navigate = useNavigate();

  const { show, onClose } = props;

  const handleCancel = () => {
    navigate("/");
  };
  return (
    <Modal show={show} centered className={classes.modal}>
      <div className={classes["modal-content"]}>
        <Modal.Header className={classes.header}>Are you sure?</Modal.Header>
        <Modal.Body>Your progress will be lost.</Modal.Body>
        <Modal.Footer className={classes.footer}>
          <Button className={classes.button} onClick={handleCancel}>
            Yes
          </Button>
          <Button className={classes.button} onClick={onClose}>
            No
          </Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
};

export default LeavingModal;
