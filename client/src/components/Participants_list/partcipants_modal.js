import React from "react"
import { useState } from "react"
import { Table } from "react-bootstrap"
import EventDataService from "../../services/event.services"
import { Button, Modal} from "react-bootstrap";
import ToggleButton from 'react-bootstrap/ToggleButton';
import Close from "../Popups/Close"
function MyVerticallyCenteredModal(props) {
  // const [participants, setParticipants] = useState(props.participants);
  // console.log(props.participants)
  const updateParticipant = (id) => (e) => {
    console.log(id);
    const newArray = props.values.participants.map((item, i) => {
      if (id === item.id) {
        return { ...item, [`present`]:e.currentTarget.checked };
      } else {
        return item;
      }
    });
    props.setValues( item=>({ ...item , [`participants`]:newArray }) )
  };
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
          Partcipants details
        </Modal.Title>
        <button type="button" class="btn-close" aria-label="Close" onClick={props.onHide}></button>
      </Modal.Header>

      <Modal.Body className="show-grid">
      <Table striped bordered hover variant="light">
            <thead>
                <tr>
                    <th>Serial.no</th>
                    <th>Partcipants</th>
                    <th>Attendance</th>
                </tr>
            </thead>
            <tbody>
                {props.values.participants.map((doc,index) => {
                    return (
                        <tr key={doc.id}>
                          <td>
                            {doc.id+1}
                          </td>
                            <td>
                                {doc.name}
                            </td>
                            <td>
                            <ToggleButton
                              className="mb-1"
                                  id="toggle-check"
                                  type="checkbox"
                                  variant={doc.present==true ? 'outline-success' : 'outline-danger'}
                                  checked={doc.present}
                                  value="1"
                                  // onChange={
                                  //   updateParticipant(index)
                                  // }
                                  onClick={updateParticipant(doc.id)}
                            >
                                  {doc.present==true?"Present":"Absent"}
                            </ToggleButton>
                            </td>
                        </tr>
                    )
                })}

            </tbody>
        </Table>
        <button type="button" class="btn btn-primary" onClick={()=>props.onSubmit()}>Update</button>
      </Modal.Body>



      {/* <Modal.Footer>
        <Close hide={props.onHide} content={"Are sure you want to close if changes made may not be stored ?"} />
        <Button onClick={props.onSubmit} style={{backgroundColor:"#189AB4",color:"white"}}>Update</Button>
      </Modal.Footer> */}


    </Modal>
  );
}

function Partcipants_modal({id,choice,getEvents,events}) {
  const [modalShow, setModalShow] = useState(false);
  const [values, setValues] = useState(events)

  const handleEdit = async () => {
    setModalShow(true);
  }
  const onSubmit=async() => {
    console.log(values)
      const docRef = await EventDataService.updateEvent(id, values, choice);
      getEvents();
      
    setModalShow(false);
  }



  return (
    <>
      <Button style={{margin: "10px",color:"white",backgroundColor:"#189AB4"}} onClick={handleEdit}>
        Participants list
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        values={values}
        onHide={() => setModalShow(false)}
        onSubmit={onSubmit}
        setValues={setValues}
      />
    </>
  );
}

export default Partcipants_modal;