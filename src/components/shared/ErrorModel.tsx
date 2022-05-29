import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootSate } from "../../redux/reducers/RootReducer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/src/collapse.js";
import "bootstrap-icons/font/bootstrap-icons.css";

function ErrorModel(props: any) {
  const dataState = useSelector((state: RootSate) => state.GetAllJobsReducer);

  return (
    <Modal
      show={props.showModel}
      onHide={() => {
        props.handleShowModel(false);
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title className="text-danger">Error</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-danger text-center">
        <div className="d-5">{dataState.err.message}</div>
      </Modal.Body>
    </Modal>
  );
}

export { ErrorModel };
