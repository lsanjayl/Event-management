import React from "react"
import { useUserAuth } from "../../services/authservice";
const Dashboard=()=>{
    const {user,logOut}=useUserAuth()
    const handleLogout= async ()=>{
        try{
            await logOut();
        }
        catch(e){
            console.log(e.message);
        }
    }
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
        <navbar style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <h2>
                Sairam Clubs and Cells
            </h2>
            <h3>
                {user&&user.email}
            </h3>
        </navbar>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <button>Download report</button>
        <button onClick={handleLogout}>Log out</button>
        </div>
        
    <table class= "table table-stripped">
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
                <br></br>
                <td>Theme:</td>
                <br></br>
                <td>Activity:</td>
                <br></br>
                <td>Duration:</td>
            </td>
            <td>
                <td>Venue:</td>
                <br></br>
                <td>Venue city:</td>
                <br></br>
                <td>Venue State:</td>
            
            </td>
            <td>
                <td>Venue:</td>
                <br></br>
                <td>Venue city:</td>
                <br></br>
                <td>Venue State:</td>
            </td>
            <td>
                <td>No.of.students participated:</td>
                <br></br>
                <td>No.of.faculties participated</td>
                <br></br>
                <td>URL</td>
                <br></br>
                <td>Remarks</td>
                <br></br>
                <td>Session</td>
                <br></br>
                <td>Program</td>
            </td>
            <td>
                <label>Upload files</label>
                <br></br>
                <button>Report</button>
                <br></br>
                <button>Images</button>
            </td>
            <td>
                
                <button>Edit</button>
                <br></br>
                <button>Delete</button>
            </td>
            </tr>
        </tbody>
    </table>
    </div>
}
export default Dashboard;