import { useUserAuth } from "../../services/authservice";
import { Button,Navbar,Nav,Container } from 'react-bootstrap';
const Head=()=>{
    const {logOut,user}=useUserAuth()
        const club=user.email.slice(3,-17)
        const clubName=club[0].toUpperCase()+club.substring(1);
        let clubTag="club"
    const handleLogout= async ()=>{
        try{
            await logOut();
        }
        catch(e){
            console.log(e.message);
        }
        }
    return(
    <Navbar bg="dark" variant="dark">
         <Container style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:"100%"}}>
         <Navbar.Brand href="#home">
        <img
        src="https://www.shamsaalam.com/wp-content/uploads/2019/10/Sri-Sairam-college.png"
        width="160"
        height="60"
        className="d-inline-block align-top"
        alt="logo"
        />
        </Navbar.Brand>
         <Navbar.Brand href="/"> Clubs and Cells</Navbar.Brand>
         
        <Nav style={{display:'flex',alignItems:'center'}}>
        <Navbar.Brand >{user&&clubName}</Navbar.Brand>
        
        <Nav.Link> <Button variant="outline-light" onClick={handleLogout}>
          Logout
        </Button>
        </Nav.Link>
        </Nav>
        </Container>
        </Navbar>
    )
}
export default Head