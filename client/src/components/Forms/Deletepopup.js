import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import { useState } from 'react';
import {storage} from "../../services/auth"
import {ref, deleteObject } from "firebase/storage";
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
        <Button style={{ backgroundColor: "#189AB4", color: "white" }} onClick={props.onSubmit}>Yes</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Deletepopup({ deleteHandler, id ,repRef,imgRef}) {
  const [modalShow, setModalShow] = useState(false);
  const onSubmit = async () => {
    await deleteHandler(id);

    // Create a reference to the file to delete
    const reportRef = ref(storage, 'images/'+repRef);

    // Delete the file
    await deleteObject(reportRef).then(() => {
      console.log("File deleted successfully report"); 
    }).catch((error) => {
      console.log("erroe occured at report delete", error);
    });

    const imageRef = ref(storage, 'images/'+imgRef);


    await deleteObject(imageRef).then(() => {
      console.log("File deleted successfully image"); 
    }).catch((error) => {
      console.log("erroe occured at image delete", error);
    });


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