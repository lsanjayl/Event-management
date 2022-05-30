import React from "react"
import {useEffect,useState} from "react"
import Head from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import EventModal from "../Forms/Modal";
import EventEdit from "../Forms/Edit";
import EventDataService from "../../services/event.services"
import { useUserAuth } from "../../services/authservice";
import {FloatingLabel,Form, Button, Table} from "react-bootstrap"

 const Dashboard=()=>{
        const [event,setEvent]=useState("");
        const [events, setEvents] = useState([]);
        const navigate=useNavigate();
        const {user}=useUserAuth()
         //=========club name display=============/
        const club=user.email.slice(3,-17)
        //=============list events================/
        useEffect(() => {
          getEvents();
        }, []);
        const filt=(e)=>{
            setEvent(e.target.value)
            console.log(event)
            setEvents(events.filter((i)=>{return (i.event==={event})}))
            console.log(events)
        }
        const getEvents = async () => {
          const data = await EventDataService.getAllEvent(club);
          setEvents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        //==============Deletehandle==============/
        const deleteHandler = async (id) => {
            await EventDataService.deleteEvent(id,club);
            getEvents();
          };
    return <div>
        <Head/>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:"100%"}}>
           
           <Button variant="primary" style={{margin:"10px"}} onClick={()=>navigate("/download")}>
           Download report
           </Button>
           <div style={{display:"flex",alignItems:"center"}}>
           <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1"style={{margin:"10px",width:"140px",height:"50px"}}>
                <FloatingLabel controlId="floatingInput" label="Event type" className="mb-3">
                <Form.Select aria-label="Floating label select example" name="event" value={event} onChange={(e)=>filt(e)}>
                <option value="1">ALL</option>
                <option value="Intracollege">Intracollege</option>
                <option value="National level">National level</option>
                <option value="International level">International level</option>
                </Form.Select>          
                </FloatingLabel>
          </Form.Group>
            <EventModal choice={club} getEvents={getEvents}/>
           </div>
        </div>
    <div style={{padding:"10px"}}>
    <Table striped bordered hover variant="light">
        <thead>
          <tr>
          <th>Serial</th> 
          <th>Activity Details</th> 
          <th>Participant Details</th> 
          <th>More info</th> 
          <th>Attachements</th> 
          <th>Edit</th> 
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
                <br></br>
                <td>Event:{doc.event}</td>
                
            </td>
            <td>
            <td>No.of.students participated:{doc.noofstud}</td>
                <br></br>
                <td>No.of.faculties participated:{doc.nooffaculty}</td>
                <br></br>
                <td>URL:{doc.url}</td>
                
            </td>
            <td>
                <td>Venue:{doc.venue}</td>
                <br></br>
                <td>Date:{doc.date}</td>
                <br></br>
                <td>Mode:{doc.mode}</td>
                <br></br>
                <td>Remarks:{doc.remarks}</td>
            </td>
            <td>
                <label>Uploaded files</label>
                <br></br>
                <br></br>
                <a href={doc.report}target="_blank"style={{textDecoration:"none",color:"white",background:"#0d6efd",borderRadius:"4px",margin:"10px",padding:"5px 7px"}}>Download report</a>
                <br></br>
                <br></br>
                <a href={doc.image} target="_blank" style={{textDecoration:"none",color:"white",background:"#0d6efd",borderRadius:"4px",margin:"10px",padding:"5px 7px"}}>View image</a>
            </td>
            <td>
                
                <EventEdit id={doc.id} choice={club} getEvents={getEvents}/>
                <br></br>
                <Button onClick={(e) => deleteHandler(doc.id)}  variant="outline-danger"style={{margin:"10px"}}>Delete</Button>
            </td>
            </tr>
            
                )
             })}
            
        </tbody>
    </Table>
    </div>
    </div>
}


export default Dashboard;

