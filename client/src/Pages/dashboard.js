import React from "react"
import { useEffect, useState } from "react"
import Head from "../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import EventModal from "../components/Forms/Modal";
import EventDataService from "../services/event.services"
import { useUserAuth } from "../services/authservice";
import { Button } from "react-bootstrap"
import Eventtable from "../components/Table/Eventtable";
import Filter from "../components/Forms/Filter"
import Pagination from "../components/Clientcomponents/Pagination";
const Dashboard = () => {
  const [events, setEvents] = useState([]);
  const [filtEvents, setFiltEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(7);
  const navigate = useNavigate();
  const { user } = useUserAuth()

  //=========club name display=============/
  const club = user.email.slice(3, -17)
  //=============list events================/
  useEffect(() => {
    getEvents();
  }, []);
  const getEvents = async () => {
    const data = await EventDataService.getAllEvent(club);
    setEvents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setFiltEvents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log("Firebase events fetch")
  };

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

  const paginate = pageNumber => setCurrentPage(pageNumber);
  return <div>
    <Head />
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: "100%" }}>
      <Button variant="primary" style={{ margin: "10px" }} onClick={() => navigate("/download", { state: { events: events } })}>
        Download report
      </Button>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Filter setEvents={setEvents} events={events} filterEvents={filterEvents} />
        <EventModal choice={club} getEvents={getEvents} />
      </div>
    </div>
    <div style={{ padding: "10px",display:"flex",flexDirection:"column",alignItems:"center"}}>
      <Eventtable events={currentPosts} getEvents={getEvents} club={club} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={events.length}
        paginate={paginate}
      />
    </div>
  </div>
}


export default Dashboard;

