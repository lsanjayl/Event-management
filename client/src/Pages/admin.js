import React from "react"
import { useEffect, useState } from "react"
import { Button,Form} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import EventModal from "../components/Forms/Addevent/Modal";
import EventDataService from "../services/event.services"
import Head from "../components/Navbar/Navbar"
import Eventtable from "../components/Table/Eventtable";
import Filter from "../components/Forms/Filter"
import Pagination from "../components/Pagination/Pagination";
const Admin = () => {
    const [selected, setSelected] = useState(true)
    const [events, setEvents] = useState([]);
    const [choice, setChoice] = useState("");
    const [filtEvents, setFiltEvents] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(7);
    const navigate = useNavigate();
    //=========club name display=============/
    const club = (localStorage.getItem("email")).slice(3, -17);
    if (club !== "admin") {
        setChoice(club);
    }
    //=============Admin-select================/
    const handleAdmin =async () => {
        console.log(choice)
        setChoice(choice)
        setSelected(false);
        await getEvents();
    }

    //=============list events================/
    useEffect(() => {
        getEvents();
    }, []);
    const getEvents = async () => {
        const data = await EventDataService.getAllEvent(choice);
        setEvents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setFiltEvents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        console.log("Firebase events fetch")
    };
    //=============Filter================/
    const filterEvents = async (theme, event, mode) => {
        console.log(filtEvents)
        const data = await EventDataService.filt(filtEvents, theme, event, mode);
        setEvents(data);
        console.log(data);
    }
    //=============Pagination================/
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = events.slice(indexOfFirstPost, indexOfLastPost);
    // setFiltEvents(currentPosts);
    console.log("currentPosts", currentPosts);
    const paginate = pageNumber => setCurrentPage(pageNumber);
    return <div style={{backgroundColor:"#D4F1F4",height:"100%",display: 'flex', justifyContent:'space-between',flexDirection:"column"}}>
        {/* Navbar  */}
        <Head />
        {/* Options for adding / downloadingreport */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: "100%" }}>

            <Button variant="primary" style={{margin: "10px",backgroundColor:"#189AB4",color:"white"}} onClick={() => navigate("/download", { state: { events: events,clubName:choice } })}>
                Download report
            </Button>


            <div style={{ display: "flex", alignItems: "center" }}>
                {club === "admin" && <>
                    <Form.Select variant="primary" value={choice} onChange={(e) => setChoice(e.target.value)} style={{ width: "150px" }}>
                        <option value="">Choose</option>
                        <option value="mapps" >Mapps</option>
                        <option value="maths">Maths</option>
                        <option value="photography">photography</option>
                    </Form.Select>
                    <Button variant="primary" style={{margin: "10px",backgroundColor:"#189AB4",color:"white"}} onClick={handleAdmin}> Apply </Button>
                </>
                }
                <Filter setEvents={setEvents} events={events} filterEvents={filterEvents} />
                <EventModal choice={choice} getEvents={getEvents} />
            </div>
        </div>

        {/* MainTable */}

        <div style={{ padding: "10px", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Eventtable events={currentPosts} getEvents={getEvents} choice={choice} />
            {selected &&
                <div style={{ width: "100%", display: "flex", justifyContent: "space-around", backgroundColor: "#003d55", color: "white" }}>
                    <h3>Select a club </h3>
                </div>
            }
            {((!events.length)&&(!selected)) &&
                <div style={{ width: "100%", display: "flex", justifyContent: "space-around", backgroundColor: "#003d55", color: "white" }}>
                    <h5>There is no events to display</h5>
                </div>
            }
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={events.length}
                paginate={paginate}
            />
        </div>
        <p style={{margin:"6px",padding:"0px",textAlign:"right",fontSize:"1rem",color:"#003d55",fontWeight:"600"}}>Made with❤️️by <a href="https://github.com/lsanjayl" target="_blank" style={{color:"#10c0cc"}}>|sanjay|</a></p>
    </div>
}


export default Admin
