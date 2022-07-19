import React from "react"
import { useEffect, useState } from "react"
import { Button, Table, Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import EventModal from "../components/Forms/Modal";
import EventDataService from "../services/event.services"
import { useUserAuth } from "../services/authservice";
import Head from "../components/Navbar/Navbar"
import Eventtable from "../components/Table/Eventtable";
const Admin = () => {
    const navigate = useNavigate();
    const [selected, setSelected] = useState(true)
    const [events, setEvents] = useState([]);
    const [choice, setChoice] = useState("");
    const { user } = useUserAuth()
    //=========club name display=============/

    const club = user.email.slice(3, -17)

    if (club !== "admin") {
        setChoice(club);
    }


    //=============Admin-select================/

    const handleAdmin = () => {
        console.log(choice)
        setChoice(choice)
        setSelected(false);
        getEvents();
    }

    //=============list events================/
    useEffect(() => {
        getEvents();
    }, []);
    const getEvents = async () => {
        const data = await EventDataService.getAllEvent(choice);
        setEvents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    return <div>
        {/* Navbar  */}
        <Head />
        {/* Options for adding / downloadingreport / refreshing the list */}
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
                <EventModal choice={choice} getEvents={getEvents} />
            </div>
        </div>

        {/* MainTable */}

        <div style={{ padding: "10px" }}>
            <Eventtable events={events} getEvents={getEvents} club={choice} />
            {selected &&
                <div style={{ width: "100%", display: "flex", justifyContent: "space-around", backgroundColor: "#f8f9fa", color: "black" }}>
                    <h3>Select a club </h3>
                </div>
            }
        </div>
    </div>
}


export default Admin

