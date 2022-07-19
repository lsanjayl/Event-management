import React from "react"
import { useState } from "react"
import EventDataService from "../../services/event.services"
import { Button, Modal, FloatingLabel, Form, Container, Row, Col } from "react-bootstrap"
import Close from "./Close"
function MyVerticallyCenteredModal(props) {

  const handleChange = e => {

    props.setValues(prevUser => ({ ...prevUser, [e.target.name]: e.target.value }));
  }
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Event details
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="show-grid">
        <Container>
          <Row>

            <Col>
              <FloatingLabel
                controlId="floatingInput"
                label="Title"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="name@example.com" name="title" value={props.values.title} onChange={handleChange} />
              </FloatingLabel>
            </Col>

            <Col>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <FloatingLabel controlId="floatingInput" label="Theme" className="mb-3">
                  <Form.Select aria-label="Floating label select example" value={props.values.theme} name="theme" onChange={handleChange}>
                    <option value="webinar">Webinar/Handson</option>
                    <option value="hackathon">Hackathon</option>
                    <option value="awarnessprograms">Awarness programs</option>
                  </Form.Select>
                </FloatingLabel>
              </Form.Group>
            </Col>

          </Row>
          <Row>
            <Col>
              <FloatingLabel controlId="floatingInput" label="Venue" className="mb-3">
                <Form.Control type="text" placeholder="venue" name="venue" value={props.values.venue} onChange={handleChange} />
              </FloatingLabel>
            </Col>

            <Col>
              <FloatingLabel controlId="floatingSelect" label="Mode of event">
                <Form.Select aria-label="Floating label select example" value={props.values.mode} name="mode" onChange={handleChange}>
                  <option value="Offline">Offline</option>
                  <option value="Online">Online</option>
                </Form.Select>
              </FloatingLabel>
            </Col>

          </Row>
          <Row>
            <Col>
              <FloatingLabel controlId="floatingSelect" label="Date" className="mb-3">
                <Form.Control type="text" placeholder="Date" value={props.values.date} name="date" onChange={handleChange} />
              </FloatingLabel>
            </Col>

            <Col>
              <FloatingLabel controlId="floatingSelect" label="Duration">
                <Form.Control type="text" placeholder="Duration" value={props.values.duration} name="duration" onChange={handleChange} />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col>
              <FloatingLabel controlId="floatingInput" label="No.of.Faculty" className="mb-3">
                <Form.Control type="text" placeholder="No.of.Faculty" value={props.values.nooffaculty} name="nooffaculty" onChange={handleChange} />
              </FloatingLabel>
            </Col>

            <Col>
              <FloatingLabel controlId="floatingInput" label="No.of.stud" className="mb-3">
                <Form.Control type="text" placeholder="No.of.stud" value={props.values.noofstud} name="noofstud" onChange={handleChange} />
              </FloatingLabel>
            </Col>

          </Row>
          <Row>
            <Col>
              <FloatingLabel controlId="floatingInput" label="Video URL" className="mb-3">
                <Form.Control type="text" placeholder="Video URL" value={props.values.url} name="url" onChange={handleChange} />
              </FloatingLabel>
            </Col>

            <Col>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <FloatingLabel controlId="floatingInput" label="Remarks" className="mb-3">
                  <Form.Control as="textarea" rows={3} placeholder="Remarks" value={props.values.remarks} name="remarks" onChange={handleChange} />
                </FloatingLabel>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <FloatingLabel controlId="floatingInput" label="Event type" className="mb-3">
                  <Form.Select aria-label="Floating label select example" value={props.values.event} name="event" onChange={handleChange}>
                    <option value="Intercollege">Intercollege</option>
                    <option value="Nationallevel">National level</option>
                    <option value="Internationallevel">International level</option>
                  </Form.Select>
                </FloatingLabel>
              </Form.Group>
            </Col>
            <Col></Col>
          </Row>

          {/* <Row>
        <Col>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
        <FormLabel>Report files</FormLabel>
        <Form.Control name="reports" type="file" />
        </Form.Group>
        </Col>
        
        </Row>
        <Row>
        <Col>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
        <FormLabel>Images</FormLabel>
        <Form.Control name="images" type="file"/>
        </Form.Group>
        </Col>
        </Row> */}



        </Container>
      </Modal.Body>



      <Modal.Footer>
        <Close hide={props.onHide} content={"Are sure you want to close if changes made may not be stored ?"} />
        <Button onClick={props.onSubmit}>Update</Button>
      </Modal.Footer>


    </Modal>
  );
}

function EventEdit({ id, choice, getEvents }) {


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
    event: "Intercollege"
  })
  const handleEdit = async () => {
    setModalShow(true);
    const docSnap = await EventDataService.getEvent(id, choice);
    setValues(docSnap.data());

  }



  const onSubmit = async () => {
    try {
      const docRef = await EventDataService.updateEvent(id, values, choice);
      getEvents();

    } catch (e) {
      console.error("Error adding document: ", e);
    }

    setModalShow(false);
    setValues({
      title: "",
      theme: "",
      venue: "",
      mode: "",
      date: "",
      duration: "",
      nooffaculty: "",
      noofstud: "",
      url: "",
      remarks: "",
      event: ""
    })
  }


  return (
    <>
      <Button variant="outline-primary" onClick={handleEdit} style={{ margin: "10px" }}>
        Edit
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        values={values}
        setValues={setValues}
        onSubmit={onSubmit}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default EventEdit;
