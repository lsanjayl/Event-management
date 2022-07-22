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
    <div >
      <Head />
      <Button style={{ margin: "20px",backgroundColor:"#189AB4",color:"white"}} onClick={handlePrint} >Download</Button>
      <ComponentToPrint ref={componentRef} events={events} clubName={clubName}/>
    </div>
  );
};
export default Example