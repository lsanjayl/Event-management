import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import { useState } from 'react';
import { storage } from "../../../services/auth"
import EventDataService from "../../../services/event.services"
import Updatereport from './Updatereport';
import Updateimage from './Updateimage';
import Imagecard from './Imagecard';
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Download/Edit
        </Modal.Title>
      </Modal.Header>
      <Modal.Body >
        <h5>Uploaded report</h5>
        <p>{props.repRef}</p>
        <div style={{ display: "flex" }}>
          <a href={props.report} target="_blank" style={{ textDecoration: "none", color: "white", background: "#189AB4", borderRadius: "4px", padding: "7px 10px" }}>Download</a>
          <Updatereport repRef={props.repRef} choice={props.choice} id={props.id} getEvent={props.getEvent} />
        </div>
        <hr />
        <h5>Uploaded collage/image</h5>
        <Imagecard imgRef={props.imgRef} image={props.image} />
        <br></br>
        <div style={{ display: "flex" }}>
          <a href={props.image} target="_blank" style={{ textDecoration: "none", color: "white", background: "#189AB4", borderRadius: "4px", padding: "7px 10px" }}>Download</a>
          <Updateimage imgRef={props.imgRef} choice={props.choice} id={props.id} getEvent={props.getEvent} />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} style={{ backgroundColor: "#189AB4", color: "white" }}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Filesmanage({ id, choice, getEvents }) {
  const [modalShow, setModalShow] = useState(false);
  const [values, setValues] = useState({
    title: "",
    theme: "webinar",
    venue: "",
    mode: "Offline",
    date: "",
    duration: "",
    nooffaculty: "",
    noofstud: "",
    url: "",
    remarks: "",
    image: "",
    report: "",
    repRef: "",
    imgRef: "",
    event: "Intercollege",
  })
  const handleEdit = async () => {
    setModalShow(true);
    console.log(choice)
    const docSnap = await EventDataService.getEvent(id, choice);
    setValues(docSnap.data());

  }
  const getEvent = async () => {
    const docSnap = await EventDataService.getEvent(id, choice);
    setValues(docSnap.data());
  };
  const close = () => {
    setModalShow(false);
    getEvents();
  }

  return (
    <>
      <Button style={{ margin: "10px", backgroundColor: "#189AB4", color: "white" }} onClick={() => handleEdit()}>
        Download/Edit
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => close()}
        id={id}
        choice={choice}
        report={values.report}
        image={values.image}
        repRef={values.repRef}
        imgRef={values.imgRef}
        getEvent={getEvent}
      />
    </>
  );
}
export default Filesmanage;