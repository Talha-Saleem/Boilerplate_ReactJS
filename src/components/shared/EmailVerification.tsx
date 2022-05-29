import { Button, Modal } from "react-bootstrap";

function EmailVerification(props: any) {
  return (
    <>
      <Modal
        show={props.showEmailVerificationModel}
        onHide={() => props.setShowEmailVerificationModel(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Verification</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ display: "flex", flexDirection: "column" }}>
          <div className="d-5">Click verify button to verify your email.</div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.handleEmailVerification}>Verify</Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={props.showEmailVerificationSuccessModel}
        onHide={() => props.setShowEmailVerificationSuccessModel(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Verification</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ display: "flex", flexDirection: "column" }}>
          <div className="d-5">Please check your Email.</div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EmailVerification;
