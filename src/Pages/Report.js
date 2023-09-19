import React, { useRef } from 'react';
import Head from "../components/Navbar/Navbar"
import { useReactToPrint } from 'react-to-print';
import { Button } from 'react-bootstrap';
import { ComponentToPrint } from '../components/Downloadcomponent/Download';
import { useLocation } from 'react-router-dom';
const Example = () => {
  const location = useLocation();
  const events = location.state.events;
  const clubName = location.state.clubName;
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div style={{backgroundColor:"#D4F1F4",height:"100%",display: 'flex', justifyContent:'space-between',flexDirection:"column"}}>
      <Head />
      <div>
      <Button style={{ margin: "20px",backgroundColor:"#189AB4",color:"white"}} onClick={handlePrint} >Download</Button>
      <ComponentToPrint ref={componentRef} events={events} clubName={clubName}/>
      </div>
      <p style={{margin:"6px",padding:"0px",textAlign:"right",fontSize:"1rem",color:"#003d55",fontWeight:"600"}}>Made with❤️️by <a href="https://github.com/lsanjayl"target="_blank" style={{color:"#10c0cc"}}>|sanjay|</a></p>

    </div>
  );
};
export default Example