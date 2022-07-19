import React from "react"
import { useState } from "react"
import EventDataService from "../../services/event.services"
import { Button, Modal, FloatingLabel, Form, Container, Row, Col } from "react-bootstrap"
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
          Filter/sort
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <FloatingLabel controlId="floatingInput" label="Theme" className="mb-3">
                  <Form.Select aria-label="Floating label select example" value={props.values.theme} name="theme" onChange={handleChange}>
                    <option value='true'>All</option>
                    <option value="webinar">Webinar/Handson</option>
                    <option value="hackathon">Hackathon</option>
                    <option value="awarnessprograms">Awarness programs</option>
                  </Form.Select>
                </FloatingLabel>
              </Form.Group>
            </Col>
            <Col>
              <FloatingLabel controlId="floatingSelect" label="Mode of event">
                <Form.Select aria-label="Floating label select example" value={props.values.mode} name="mode" onChange={handleChange}>
                  <option value='true'>All</option>
                  <option value="Offline">Offline</option>
                  <option value="Online">Online</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <FloatingLabel controlId="floatingInput" label="Event type" className="mb-3">
                  <Form.Select aria-label="Floating label select example" value={props.values.event} name="event" onChange={handleChange}>
                    <option value='true'>All</option>
                    <option value="Intercollege">Inter college</option>
                    <option value="Nationallevel">National level</option>
                    <option value="Internationallevel">International level</option>
                  </Form.Select>
                </FloatingLabel>
              </Form.Group>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onSubmit}>Apply</Button>
      </Modal.Footer>
    </Modal>
  );
}
function Filter({ filterEvents }) {
  const [modalShow, setModalShow] = useState(false);
  const onSubmit = async () => {
    try {
      await filterEvents(values.theme, values.event, values.mode);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setModalShow(false);
  }
  const close = () => {
    setModalShow(false);
    setValues({
      theme: 'true',
      mode: 'true',
      strdate: "",
      enddate: "",
      event: 'true',
    })
  }
  const [values, setValues] = useState({
    theme: 'true',
    mode: 'true',
    strdate: "",
    enddate: "",
    event: 'true',
  })
  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)} style={{ margin: "10px", width: "110px" }}>
        Filter
      </Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        values={values}
        setValues={setValues}
        onSubmit={onSubmit}
        onHide={close}
      />
    </>
  );
}

export default Filter;
