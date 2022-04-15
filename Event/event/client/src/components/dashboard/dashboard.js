import React from "react"
import {useEffect,useState} from "react"
import { Button,Navbar,Nav,Container, Table } from 'react-bootstrap';
import EventModal from "./Modal";
import EventEdit from "./Edit";
import EventDataService from "../../services/event.services"
import { useUserAuth } from "../../services/authservice";
const Dashboard=()=>{

        const [events, setEvents] = useState([]);
        useEffect(() => {
          getEvents();
        }, []);
      
        const getEvents = async () => {
          const data = await EventDataService.getAllEvent(club);
          setEvents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        const deleteHandler = async (id) => {
            await EventDataService.deleteEvent(id,club);
            getEvents();
          };
    //=====================Edit section=========================//
    
    





    //=========================================================//
    const {user,logOut}=useUserAuth()
    const handleLogout= async ()=>{
        try{
            await logOut();
        }
        catch(e){
            console.log(e.message);
        }
    }
    //Club name display
    // const clubName="Mapps"
    const club=user.email.slice(3,-21)
    const clubName=club[0].toUpperCase()+club.substring(1);
    return <div>


        <Navbar bg="dark" variant="dark">
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
         <Navbar.Brand href="/"> Clubs and Cells</Navbar.Brand>
         
        <Nav style={{display:'flex',alignItems:'center'}}>
        <Navbar.Brand >{user&&clubName}club</Navbar.Brand>
        <Nav.Link> <Button variant="primary" onClick={handleLogout}>
          Logout
        </Button>
        </Nav.Link>
        </Nav>
        </Container>
        </Navbar>


    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        

        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:"100%"}}>
            <div>
            <Button variant="primary" size="sl" onClick={getEvents}>
           Refresh List
           </Button>
           <EventModal />
           </div>
           <Button variant="primary" onClick={handleLogout}style={{margin:"10px"}}>
           Download report
           </Button>
        </div>
        

       

    </div>
        


    <div style={{padding:"10px"}}>
    <Table striped bordered hover variant="dark">
        <thead>
          <tr>
          <th>Serial</th> 
          <th>Activity Details</th> 
          <th>Venue Details</th> 
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
            </td>
            <td>
                <td>Venue:{doc.venue}</td>
            </td>
            <td>
                <td>No.of.students participated:{doc.noofstud}</td>
                <br></br>
                <td>No.of.faculties participated:{doc.nooffaculty}</td>
                <br></br>
                <td>URL:{doc.url}</td>
                <br></br>
                <td>Remarks:{doc.remarks}</td>
            </td>
            <td>
                <label>Upload files</label>
                <br></br>
                <Button variant="primary"style={{margin:"10px"}}>Report</Button>
                <br></br>
                <Button variant="primary"style={{margin:"10px"}}>Images</Button>
            </td>
            <td>
                
                <EventEdit id={doc.id}/>
                <br></br>
                <Button onClick={(e) => deleteHandler(doc.id)}  variant="primary"style={{margin:"10px"}}>Delete</Button>
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

