import { Button, Modal } from "react-bootstrap";
import { logOut } from "../../apis/auth/auth.api";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/src/collapse.js";
import "bootstrap-icons/font/bootstrap-icons.css";

function Logout(props: any) {
  const handleShowModel = (flag: boolean) => {
    props.setShowModel(flag);
  };
  const handleLogout = async () => {
    await logOut();
    handleShowModel(false);
  };
  return (
    <Modal show={props.showModel} onHide={() => handleShowModel(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Logout</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ display: "flex", flexDirection: "column" }}>
        <div className="d-5">Are you sure, You want to logout?</div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => handleLogout()}>Logout</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Logout;
