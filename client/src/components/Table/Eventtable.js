import { Table } from "react-bootstrap"
import EventDataService from "../../services/event.services"
import Deletepopup from "../Popups/Deletepopup";
import EventEdit from "../Forms/Edit";
import Filesmanage from "../Forms/Imagedit/Filesmanage";
import Partcipants_modal from "../Participants_list/partcipants_modal";
const Eventtable = ({ events, getEvents, choice }) => {
    const deleteHandler = async (id) => {
        await EventDataService.deleteEvent(id, choice);
        getEvents();
    };
    return (
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
                {events.map((doc, index) => {
                    return (
                        <tr key={doc.id}>
                            <td>
                                {index + 1}
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
                                <Partcipants_modal id={doc.id} choice={choice} getEvents={getEvents} events={events[index]} />
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
                                <label>Downloadable files</label>
                                <br></br>
                                <br></br>
                                <Filesmanage id={doc.id} choice={choice} getEvents={getEvents}/>
                                {/* <a href={doc.report} target="_blank" style={{ textDecoration: "none", color: "white", background: "#189AB4", borderRadius: "4px", margin: "10px", padding: "5px 7px" }}>Report</a>
                                <br></br>
                                <br></br>
                                <a href={doc.image} target="_blank" style={{ textDecoration: "none", color: "white", background: "#189AB4", borderRadius: "4px", margin: "10px", padding: "5px 7px" }}>Images</a> */}
                            </td>
                            <td>
                                <EventEdit id={doc.id} choice={choice} getEvents={getEvents} />
                                
                                <br></br>
                                <Deletepopup id={doc.id} repRef={doc.repRef} imgRef={doc.imgRef}  deleteHandler={deleteHandler} />
                            </td>
                        </tr>
                    )
                })}

            </tbody>
        </Table>
    )
}
export default Eventtable;