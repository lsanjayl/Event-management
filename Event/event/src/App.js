
import Dashboard from "./components/dashboard/dashboard"
// import { Route, Link, Routes, BrowserRouter as Router } from 'react-router-dom'
import Login from "./components/login/login"
import { useState } from "react";
function App() {

  const [blogs, setBlog] = useState([{
    id:1,
    title:"First Blog",
    desription:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    src:"https://cwexplorationphotography.com/wp-content/uploads/2013/11/10896225_528254790650735_6470305242078852429_o.jpg",
    author:"Test",
    authorPic:"https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png",
    time:"9 mins"
  }])


  //  return (
  //   <Router>  
  //   <div>    
  //     <Dashboard/>
  //     {/* <Route exact path="/" render={() => <Dashboard />} />
  //     <Route exact path="/Create" render={() => <Create/>} /> 
  //     <Route exact path="/Create" render={() => <Details blogDetails={blogDetails}/>} />  */}
      
  //   </div>  
    
  // </Router>
  //  )     

  return (
    // <Login/>
    <Dashboard/>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Dashboard blogs={ blogs } />} />
    //     <Route path="create/" element={<Create />} />
    //     <Route path="details/:id" element={<Details  blogs={blogs}/>} />
    //   </Routes>
    // </Router>
  );
  
   
    
}

export default App;