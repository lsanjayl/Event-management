import React from "react"
const dashboard=()=>{
    return <div>
        <navbar>
            <h2>
                Event manager
            </h2>
        </navbar>
        <button>Download report</button>
    <table>
        <thead>
          <tr>
          <th>Activity Details</th> 
          <th>Venue Details</th> 
          <th>More info</th> 
          <th>Attachements</th> 
          <th>Edit</th> 
          </tr>
        </thead>
        <tbody>
            <tr>
            <td>
                <td>Title:</td>
                <td>Theme:</td>
                <td>Activity:</td>
                <td>Duration:</td>
            </td>
            <td>
                <td>Venue:</td>
                <td>Venue city:</td>
                <td>Venue State:</td>
            </td>
            <td>
                <td>Venue:</td>
                <td>Venue city:</td>
                <td>Venue State:</td>
            </td>
            <td>
                <td>No.of.students participated:</td>
                <td>No.of.faculties participated</td>
                <td>URL</td>
                <td>Remarks</td>
                <td>Session</td>
                <td>Program</td>
            </td>
            <td>
                <label>Upload files</label>
                <button>Report</button>
                <button>Images</button>
            </td>
            <td>
                
                <button>Edit</button>
                <button>Delete</button>
            </td>
            </tr>
        </tbody>
    </table>
    </div>
}
export default dashboard;