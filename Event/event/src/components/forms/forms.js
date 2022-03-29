const forms=()=>{
    return <div>
        {/* tilte */}
  <label for="title">Title:</label>
  <input type="text" id="title" name="title"/><br></br>
  {/* clubs and cells */}
  <label for="clubs">Clubs and cells:</label>
  <select id="clubs" name="clubs">
      <option value="technocluture">Technocluture Club</option>
      <option value="automobile">Automobile Club</option>
      <option value="code">Code Club</option>
      <option value="cyber">Cyber Club</option>
      <option value="disaster">Disaster Management & Safety Club</option>
      <option value="Eco ">Eco and Swacch Bharat Club</option>
      <option value="ensav">ENSAV Club</option>
      <option value="english">English Literary Club</option>
      <option value="foreign">Foreign Language Club</option>
      <option value="arts">Fine arts Club</option>
      <option value="health">Health and Yoga Club</option>
      <option value="m-apps">M-Apps Club</option>
      <option value="math">Math Club</option>
      <option value="photography">Photography Club</option>
      <option value="robotics">Robotics Club</option>
      <option value="rotaract">Rotaract Club</option>
      <option value="science">Science Club</option>
      <option value="skill">Skill development Club</option>
      <option value="muthamizh">Sai Muthamizh Mandram Club</option>
      <option value="young">Young Indian Club</option>
      <option value="red">Red Ribbon Club</option>
      <option value="entrepreneur">Entrepreneur Cell</option>
      <option value="higher">Higher Education Cell</option>
      <option value="ncc">NCC</option>
      <option value="nss">NSS</option>
      <option value="women">Women Empowerment Cell</option>
      <option value="yrc">YRC</option>
      <option value="ipr">IPR</option>
  </select>
  <br></br>
  {/* Venue name */}
  <label for="venname">Venue Name:</label>
  <input type="text" id="venname" name="venname"/><br></br>
  {/* Venue city */}
  <label for="vencity">Venue City:</label>
  <input type="text" id="vencity" name="vencity"/><br></br>
  {/* Venue state */}
  <label for="venstate">Venue State:</label>
  <input type="text" id="venstate" name="venstate"/><br></br>
  {/* start Date */}
  <label for="sdate">Start Date:</label>
  <input type="date" id="sdate" name="sdate"></input>
  <br></br>
  {/* end date */}
  <label for="edate">End Date:</label>
  <input type="date" id="edate" name="edate"></input>
  <br></br>
  {/* Duration */}
  <label for="duration">Duration:</label>
  <select id="duration" name="duration">
      <option value="1h">1 hour</option>
      <option value="2h">2 hours</option>
      <option value="3h">3 hours</option>
  </select>
  <br></br>
  {/* students participated */}
  <label for="studpart">No.of students participated: </label>
  <input type="text" id="studpart" name="studpart"></input>
  <br></br>
  {/* faculties participated */}
  <label for="facpart">No.of faculties participated: </label>
  <input type="text" id="facpart" name="studpart"></input>
  <br></br>
  {/* session type */}
  <label for="session">Session:</label>
  <select id="session" name="session">
      <option value="online">Online</option>
      <option value="offline">Offline</option>
      <option value="hybrid">Hybrid</option>
  </select>
  <br></br>
  {/* Academic Year*/}
  <label for="semester">Semester:</label>
  <select id="semester" name="semester">
      <option value="odd">Odd</option>
      <option value="even">Even</option>
  </select>
  <br></br>
  {/* semester */}
  <label for="sem">Semester:</label>
  <input type="text" id="sem" name="sem"></input>
  <br></br>
  {/* Video url */}
  <label for="url">Video URL:</label>
  <input type="text" id="url" name="url"></input>
  <br></br>
  {/* remarks */}
  <label for="remark">Remarks:</label>
  <input type="text" id="remark" name="remark"></input>
  <br></br>
  {/* attachments */}
  <label for="poster">Invitation/Poster:</label>
  <input type="file" id="poster" name="poster"></input>
  <br></br>
  <label for="event">Event Picture:</label>
  <input type="file" id="event" name="event"></input>
  <br></br>
  <label for="report">Event Report:</label>
  <input type="text" id="report" name="report"></input>
  <br></br>
  <input type="submit" value="Submit"></input>
  <br></br>
  <input type="submit" value="Close"></input>
    </div>
}
export default forms;