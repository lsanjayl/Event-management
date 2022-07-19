import React from "react"
import { useEffect, useState } from "react"
import { Button, Table, Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import EventModal from "../components/Forms/Modal";
import EventDataService from "../services/event.services"
import { useUserAuth } from "../services/authservice";
import Head from "../components/Navbar/Navbar"
import Eventtable from "../components/Table/Eventtable";
import Filter from "../components/Forms/Filter"
import Pagination from "../components/Clientcomponents/Pagination";
const Admin = () => {
    const [selected, setSelected] = useState(true)
    const [events, setEvents] = useState([]);
    const [choice, setChoice] = useState("");
    const [filtEvents, setFiltEvents] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(7);
    const navigate = useNavigate();
    const { user } = useUserAuth()
    //=========club name display=============/
    const club = user.email.slice(3, -17)
    if (club !== "admin") {
        setChoice(club);
    }
    //=============Admin-select================/
    const handleAdmin =() => {
        stage();
        stage();
    }
    const stage=async()=>{
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
        console.log("Firebase events fetch")
        callForfilteventsset();
    };
    //=============Filter================/
    const callForfilteventsset = () =>setFiltEvents(events);
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
    return <div>
        {/* Navbar  */}
        <Head />
        {/* Options for adding / downloadingreport */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: "100%" }}>

            <Button variant="primary" style={{ margin: "10px" }} onClick={() => navigate("/admindownload")}>
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
                    <Button variant="primary" style={{ margin: "10px" }} onClick={handleAdmin}> Apply </Button>
                </>
                }
                <Filter setEvents={setEvents} events={events} filterEvents={filterEvents} />
                <EventModal choice={choice} getEvents={getEvents} />
            </div>
        </div>

        {/* MainTable */}

        <div style={{ padding: "10px", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Eventtable events={currentPosts} getEvents={getEvents} club={choice} />
            {selected &&
                <div style={{ width: "100%", display: "flex", justifyContent: "space-around", backgroundColor: "#f8f9fa", color: "black" }}>
                    <h3>Select a club </h3>
                </div>
            }
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={events.length}
                paginate={paginate}
            />
        </div>
    </div>
}


export default Admin

