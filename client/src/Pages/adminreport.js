import React, { useRef,useState } from 'react';
import Head from "../components/Navbar/Navbar"
import { useReactToPrint } from 'react-to-print';
import { Button} from 'react-bootstrap';
import { ComponentToPrint } from '../components/adminComponents/adminpreviewreport';


const Adminreport = () => {
  
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
     <div >
        
      <Head/>
      
      <Button style={{margin:"20px"}} onClick={handlePrint} >Download</Button>
      <ComponentToPrint ref={componentRef} />
      
      
      
    </div>
  );
};

export default Adminreport