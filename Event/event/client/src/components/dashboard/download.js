import React from 'react';
import { useUserAuth } from "../../services/authservice";
import {useEffect,useState} from "react"
import { Button,Navbar,Nav,Container } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import EventDataService from "../../services/event.services"
export const ComponentToPrint = React.forwardRef((props, ref) => {
  
  const [events, setEvents] = useState([]);
  const {user}=useUserAuth()
         //=========club name display=============/
        // const clubName="Mapps"
        const club=user.email.slice(3,-17)
        const clubName=club[0].toUpperCase()+club.substring(1);
        useEffect(() => {
          getEvents();
        }, []);
      
        const getEvents = async () => {
          const data = await EventDataService.getAllEvent(club);
          setEvents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
    return (
      <div style={{margin:"0px 50px"}} ref={ref}>
        <Navbar bg="light" variant="dark">
         <Container style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:"100%"}}>
         <Navbar.Brand href="#home">
        <img
        src="https://www.shamsaalam.com/wp-content/uploads/2019/10/Sri-Sairam-college.png"
        width="160"
        height="60"
        className="d-inline-block align-top"
        alt="logo"
        />
        </Navbar.Brand>
         <Navbar.Brand  style={{color:"black"}}> Event Details</Navbar.Brand>
         
        <Nav style={{display:'flex',alignItems:'center'}}>
        <Navbar.Brand style={{color:"black"}}>{user&&clubName}club</Navbar.Brand>
        </Nav>
        </Container>
        </Navbar>
    <Table striped bordered hover variant="light">
        <thead>
          <tr>
          <th>Serial</th> 
          <th>Activity Details</th> 
          <th>Participant Details</th> 
          <th>More info</th> 
           
          </tr>
        </thead>
        <tbody>
            {events.map((doc,index)=>{
                return(
            <tr key={doc.id}>
                <td>
                    {index+1}
                </td>
            <td>
                <td>Title:{doc.title}</td>
                <br></br>
                <td>Theme:{doc.theme}</td>
                <br></br>
                <td>Duration:{doc.duration}</td>
            </td>
            <td>
            <td>No.of.students participated:{doc.noofstud}</td>
                <br></br>
                <td>No.of.faculties participated:{doc.nooffaculty}</td>
                <br></br>
                <td>URL:{doc.url}</td>
            </td>
            <td>
                <td>Remarks:{doc.remarks}</td>
                <br></br>
                <td>Venue:{doc.venue}</td>
                <br></br>
                <td>Date:{doc.date}</td>
            </td>
            
           
            </tr>
            
                )
             })}
            
        </tbody>
    </Table>
    </div>
    );
  });