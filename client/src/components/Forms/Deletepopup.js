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
          Are you sure you want to delete this event?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={props.onHide}>No</Button>
        <Button variant="outline-success" onClick={props.onSubmit}>Yes</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Deletepopup({ deleteHandler, id }) {
  const [modalShow, setModalShow] = useState(false);
  const onSubmit = async () => {
    await deleteHandler(id);
    setModalShow(false);
  }
  return (
    <>
      <Button variant="outline-danger" style={{ margin: "10px" }} onClick={() => setModalShow(true)}>
        Delete
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        deleteHandler={deleteHandler}
        id={id}
        onSubmit={onSubmit}
      />
    </>
  );
}
export default Deletepopup;