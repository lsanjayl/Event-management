import React from 'react';
import { useUserAuth } from "../../services/authservice";
import {useEffect,useState} from "react"
import { Navbar,Nav,Container } from 'react-bootstrap';
import EventDataService from "../../services/event.services"
import { Button,Form } from 'react-bootstrap';
import Previewtable from '../Table/Previewtable';
export const ComponentToPrint = React.forwardRef((props, ref) => {
  const [choice,setChoice]=useState("")
  const [events, setEvents] = useState([]);
         //=========club name display=============/
        useEffect(() => {
          getEvents();
        }, []);
        const handleAdmin=()=>{
          console.log(choice)
          setChoice(choice)
          getEvents();
      }
        const getEvents = async () => {
          const data = await EventDataService.getAllEvent(choice);
          setEvents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
    return (
      <div>
      <div style={{display:"flex", margin:"10px"}}>
        <Form.Select variant="primary" value={choice} onChange={(e)=>setChoice(e.target.value)}style={{width:"150px"}}>
           <option value="">Choose</option>
           <option value="mapps" >Mapps</option>
           <option value="maths">Maths</option>
           <option value="photography">photography</option>
        </Form.Select>
        <Button variant="primary"  style={{margin:"10px"}} onClick={handleAdmin}> Apply </Button>
        </div>
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
        <Navbar.Brand style={{color:"black"}}>{choice}club</Navbar.Brand>
        </Nav>
        </Container>
        </Navbar>


        <Previewtable events={events}/>


    </div>
    </div>
    );
    
  });