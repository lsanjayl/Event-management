import React, { useRef } from 'react';
import Head from "../components/Navbar/Navbar"
import { useReactToPrint } from 'react-to-print';
import { Button} from 'react-bootstrap';
import { ComponentToPrint } from '../components/Clientcomponents/clientpreviewreport';
import {useLocation} from 'react-router-dom';
const Example = () => {
  const location = useLocation();
  const events=location.state.events;
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
     <div >
      <Head/>
      <Button style={{margin:"20px"}} onClick={handlePrint} >Download</Button>
      <ComponentToPrint ref={componentRef} events={events}/>
    </div>
  );
};
export default Example