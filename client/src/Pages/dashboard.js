import React from "react"
import {useEffect,useState} from "react"
import Head from "../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import EventModal from "../components/Forms/Modal";
import EventDataService from "../services/event.services"
import { useUserAuth } from "../services/authservice";
import {Button} from "react-bootstrap"
import Eventtable from "../components/Table/Eventtable";
import Filter from "../components/Forms/Filter"
 const Dashboard=()=>{
        const [events, setEvents] = useState([]);
        const navigate=useNavigate();
        const {user}=useUserAuth()

         //=========club name display=============/
        const club=user.email.slice(3,-17)
        //=============list events================/
        useEffect(() => {
          getEvents();
        }, []);
        const getEvents = async () => {
          const data = await EventDataService.getAllEvent(club);
          setEvents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
          console.log("Firebase events fetch")
          console.log(events)
        };

        const filterEvents = async (theme,event,mode) => {
          await getEvents();
          const data = await EventDataService.filt(events,theme,event,mode);
          setEvents(data);
          console.log(data);
        }        
    return <div>
        <Head/>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:"100%"}}>
           <Button variant="primary" style={{margin:"10px"}} onClick={()=>navigate("/download",{state:{events:events}})}>
           Download report
           </Button>
           <div style={{display:"flex",alignItems:"center"}}>
            <Filter setEvents={setEvents} events={events} filterEvents={filterEvents}/>
            <EventModal choice={club} getEvents={getEvents}/>
           </div>
        </div>
    <div style={{padding:"10px"}}>
    <Eventtable events={events} getEvents={getEvents} club={club}/>
    </div>
    </div>
}


export default Dashboard;

