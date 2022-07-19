import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import { useState } from 'react';
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Delete event
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          {props.content}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={props.onHide}>No</Button>
        <Button variant="outline-success" onClick={props.onSubmit}>Yes</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Close({ hide, content }) {
  const [modalShow, setModalShow] = useState(false);
  const onSubmit = async () => {
    await hide();
    setModalShow(false);
  }
  return (
    <>
      <Button variant="outline-danger" style={{ margin: "10px" }} onClick={() => setModalShow(true)}>
        Close
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        onSubmit={onSubmit}
        content={content}
      />
    </>
  );
}
export default Close;