import React from 'react';
import { useUserAuth } from "../../services/authservice";
import { Navbar, Nav, Container } from 'react-bootstrap';
import Previewtable from '../Table/Previewtable';
export const ComponentToPrint = React.forwardRef((props, ref) => {

  // const [events, setEvents] = useState([]);
  const events = props.events;
  const clubName=props.clubName;
  return (
    <div style={{ margin: "0px 50px" }} ref={ref}>

      <Navbar bg="light" variant="dark">
        <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: "100%" }}>
          <Navbar.Brand href="#home">
            <img
              src="https://www.shamsaalam.com/wp-content/uploads/2019/10/Sri-Sairam-college.png"
              width="160"
              height="60"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Brand style={{ color: "black" }}> Event Details</Navbar.Brand>
          <Nav style={{ display: 'flex', alignItems: 'center' }}>
            <Navbar.Brand style={{ color: "black" }}>{clubName}club</Navbar.Brand>
          </Nav>
        </Container>
      </Navbar>


      <Previewtable events={events} />


    </div>
  );
});