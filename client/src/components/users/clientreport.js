import React, { useRef } from 'react';
import Head from "../Navbar/Navbar"
import { useReactToPrint } from 'react-to-print';
import { Button} from 'react-bootstrap';
import { ComponentToPrint } from './clientpreviewreport';

const Example = () => {
 
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

export default Example