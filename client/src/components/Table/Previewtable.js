import { Table } from 'react-bootstrap';
const Previewtable = ({ events }) => {
    return (
        <Table striped bordered hover variant="light">
            <thead>
                <tr>
                    <th>Serial</th>
                    <th>Activity Details</th>
                    <th>Participant Details</th>
                    <th>More info</th>
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
                                <br></br>
                                <td>Venue:{doc.venue}</td>
                                <br></br>
                                <td>Date:{doc.date}</td>
                                <td>Mode:{doc.mode}</td>
                            </td>
                            <td>
                                <td>Remarks:{doc.remarks}</td>
                                
                            </td>
                        </tr>

                    )
                })}

            </tbody>
        </Table>
    )
}
export default Previewtable;