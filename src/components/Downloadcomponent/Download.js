import React from 'react';
import { useUserAuth } from "../../services/authservice";
import { Navbar, Nav, Container } from 'react-bootstrap';
import Previewtable from '../Table/Previewtable';
import logo from "../../Images/logo.png"
export const ComponentToPrint = React.forwardRef((props, ref) => {

  // const [events, setEvents] = useState([]);
  const events = props.events;
  const clubName=props.clubName;
  return (
    <div style={{ margin: "0px 50px" }} ref={ref}>

      <Navbar variant="dark" style={{backgroundColor:"#003d55"}}>
        <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: "100%" }}>
          <Navbar.Brand href="#home"  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <img
              src={logo}
              height="70px"
              className="d-inline-block align-top"
              alt="logo"
            />
            <Navbar.Brand href="/">Event manager</Navbar.Brand>
          </Navbar.Brand>
          <Navbar.Brand style={{ color: "white" }}> Event Details</Navbar.Brand>
          <Nav style={{ display: 'flex', alignItems: 'center' }}>
            <Navbar.Brand style={{ color: "white" }}>{clubName}club</Navbar.Brand>
          </Nav>
        </Container>
      </Navbar>


      <Previewtable events={events} />


    </div>
  );
});