import React from "react"
import { useEffect, useState } from "react"
import Head from "../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import EventModal from "../components/Forms/Addevent/Modal";
import EventDataService from "../services/event.services"
import { Button } from "react-bootstrap"
import Eventtable from "../components/Table/Eventtable";
import Filter from "../components/Forms/Filter"
import Pagination from "../components/Pagination/Pagination";
const Dashboard = () => {
  const [events, setEvents] = useState([]);
  const [filtEvents, setFiltEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(7);
  const navigate = useNavigate();

  //=========club name display=============/
  const club = "mapps";
  if (club === "admin") {
    navigate("/admin")
  }
  const clubName = club[0].toUpperCase() + club.substring(1);
  //=============list events================/
  useEffect(() => {
    getEvents();
  }, []);
  const getEvents = async () => {
    const data = await EventDataService.getAllEvent(club);
    setEvents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setFiltEvents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const filterEvents = async (theme, event, mode) => {
    console.log(filtEvents)
    const data = await EventDataService.filt(filtEvents, theme, event, mode);
    setEvents(data);
    console.log(data);
  }
  //=============Pagination================/
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;console.log(events);
  const currentPosts = events.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);
  return <div style={{ backgroundColor: "#D4F1F4", height: "100%", display: 'flex', justifyContent: 'space-between', flexDirection: "column" }}>
    <Head />
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: "100%" }}>
      <Button variant="primary" style={{ margin: "10px", backgroundColor: "#189AB4", color: "white" }} onClick={() =>navigate("/download", { state: { events: events, clubName: clubName } })}>
        Download report
      </Button>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Filter setEvents={setEvents} events={events} filterEvents={filterEvents} />
        <EventModal choice={club} getEvents={getEvents} />
      </div>
    </div>
    <div style={{ padding: "10px", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Eventtable events={currentPosts} getEvents={getEvents} choice={club} />
      {!events.length &&
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
    <p style={{ margin: "6px", padding: "0px", textAlign: "right", fontSize: "1rem", color: "#003d55", fontWeight: "600" }}>Made with❤️️by <a href="https://github.com/lsanjayl" target="_blank" style={{ color: "#10c0cc" }}>|sanjay|</a></p>
  </div>
}


export default Dashboard;
