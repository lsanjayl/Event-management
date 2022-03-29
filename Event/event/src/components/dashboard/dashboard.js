import React from "react"
const dashboard=()=>{
    const content=[{
        ActivityDetails:{
            Title:"Seminar",
            Theme:"Maths",
            Date:"02/09/2022",
            Duration:"1Hour"
        },
        VenueDetails:{
            Venue:"offline",
            Venuecity:"chennai",
            VenueState:"Tamilnadu"
        },
        Moreinfo:{
            Noofstudentsparticipated:"50",
            Nooffacultiesparticipated:"5",
            URL:"www.sec.in",
            Remarks:"lorem*5",
            Session:"Online",
            Program:"Workshop",
        },
        Attachements:{
            Report:"Event report",
            Images:"Images"
        },
        Edit:{
            
        }
    }]
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
           
           
            {content.map((i)=>{
                return <tr>
            <td>
                <td>Title:{i.ActivityDetails.Title}</td>
                <td>Theme:{i.ActivityDetails.Theme}</td>
                <td>Date:{i.ActivityDetails.Date}</td>
                <td>Duration:{i.ActivityDetails.Duration}</td>
            </td>
            <td>
                <td>Venue:{i.VenueDetails.Venue}</td>
                <td>Venue city:{i.VenueDetails.VenueState}</td>
                <td>Venue State:{i.VenueDetails.Venuecity}</td>
            </td>
            <td>
                <td>No.of.students participated:{i.Moreinfo.Nooffacultiesparticipated}</td>
                <td>No.of.faculties participated:{i.Moreinfo.Noofstudentsparticipated}</td>
                <td>URL:{i.Moreinfo.URL}</td>
                <td>Remarks:{i.Moreinfo.Remarks}</td>
                <td>Session:{i.Moreinfo.Session}</td>
                <td>Program:{i.Moreinfo.Program}</td>
            </td>
            <td>
                <label>Upload files:</label>
                <button>Report</button>
                <button>Images</button>
            </td>
            <td>
                <button>Edit</button>
                <button>Delete</button>
            </td>
            </tr>
            })}
            
            
        </tbody>
    </table>
    </div>
}
export default dashboard;