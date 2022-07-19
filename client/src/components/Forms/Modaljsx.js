import { Button, Modal, FloatingLabel, Form, Container, Row, Col, FormLabel } from "react-bootstrap"
import Close from "./Close";
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
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                <FormLabel>Report files</FormLabel>
                <Form.Control name="reports" type="file" onChange={(e) => props.setReport(e.target.files[0])} />
                <Button onClick={props.uploadrep}>Upload</Button>
              </Form.Group>
            </Col>

          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                <FormLabel>Images</FormLabel>
                <Form.Control name="images" type="file" onChange={(e) => props.setImage(e.target.files[0])} />
                <Button onClick={props.upload}>Upload</Button>
              </Form.Group>
            </Col>
          </Row>



        </Container>
      </Modal.Body>



      <Modal.Footer>
        <Close hide={props.onHide} content={"Are you sure you want to close if details added will not be stored ?"} />
        <Button onClick={props.onSubmit}>Submit</Button>
      </Modal.Footer>


    </Modal>
  );
}
export default MyVerticallyCenteredModal;