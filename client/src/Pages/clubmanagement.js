import React from "react"
import { useEffect, useState } from "react"
import { Button,Form,Table} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import EventModal from "../components/Forms/Addevent/Modal";
import EventDataService from "../services/event.services"
import Head from "../components/Navbar/Navbar"
import Pagination from "../components/Pagination/Pagination";
import Addclub from "../components/Addclub/Addclub";
const Admin = () => {
    const [clubs, setClubs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(7);
    const navigate = useNavigate();
    //=============list events================/
    useEffect(() => {
        getClubs();
    }, []);
    const getClubs = async () => {
        const data = await EventDataService.getAllEvent('clubs');
        setClubs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        console.log("Firebase clubs fetched")
    };
    //=============Pagination================/
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = clubs.slice(indexOfFirstPost, indexOfLastPost);
    // setFiltEvents(currentPosts);
    console.log("currentPosts", currentPosts);
    const paginate = pageNumber => setCurrentPage(pageNumber);
    return <div style={{backgroundColor:"#D4F1F4",height:"100%",display: 'flex', justifyContent:'space-between',flexDirection:"column"}}>
        {/* Navbar  */}
        <Head />
        {/* Options for adding / downloadingreport */}
        <div>
            <Addclub/>
            </div>
        <div>
        <Table striped bordered hover variant="light">
            <thead>
                <tr>
                    <th>Serial.no</th>
                    <th>Groups</th>
                    <th>Group icon</th>
                    <th>Description</th>
                    <th>Manage</th>
                </tr>
            </thead>
            <tbody>
                {clubs.map((doc,index) => {
                    return (
                        <tr >
                          <td>
                            {index+1}
                          </td>
                            <td>
                                {doc.name}
                            </td>
                            <td>
                                <img src={doc.iconref} style={{width:"54px"}}/>
                            </td>
                            <td>
                                {doc.description}
                            </td>
                            <td>
                            <Button variant="primary" style={{margin: "10px",backgroundColor:"#189AB4",color:"white"}} onClick={() => navigate("/clubmanagement")}>
                                 Manage
                            </Button>
                            </td>
                        </tr>
                    ) 
                })}

            </tbody>
        </Table>
        </div>
        <div style={{display: "flex", justifyContent:"center"}}>


        <Pagination
                postsPerPage={postsPerPage}
                totalPosts={clubs.length}
                paginate={paginate}
            />
                    </div>
        <p style={{margin:"6px",padding:"0px",textAlign:"right",fontSize:"1rem",color:"#003d55",fontWeight:"600"}}>Made with❤️️by <a href="https://github.com/lsanjayl" target="_blank" style={{color:"#10c0cc"}}>|sanjay|</a></p>
    </div>
}


export default Admin
