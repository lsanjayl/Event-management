import { useUserAuth } from "../../services/authservice";
import { Button, Navbar, Nav, Container } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import logo from "../../Images/logo.png"
const Head = () => {
    const { logOut, user } = useUserAuth()
    const club= (localStorage.getItem("email")).slice(0, -17);
    const clubName = club[0].toUpperCase() + club.substring(1);
    const navigate = useNavigate();
    let clubTag = "club"
    const handleLogout = async () => {
        try {
            await logOut();
            localStorage.setItem("email","");
            localStorage.setItem("password","");
            navigate("/login");
        }
        catch (e) {
            console.log(e.message);
        }
    }
    return (
        <Navbar variant="dark" style={{backgroundColor:"#003d55"}}>
            <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: "100%" }}>
            <Navbar.Brand href="#home" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <img
              src={logo}
              height="70px"
              className="d-inline-block align-top"
              alt="logo"
            />
            <Navbar.Brand href="/">Event manager</Navbar.Brand>
          </Navbar.Brand>
                <Navbar.Brand href="/"> Clubs and Cells</Navbar.Brand>

                <Nav style={{ display: 'flex', alignItems: 'center' }}>
                    <Navbar.Brand >{clubName}</Navbar.Brand>

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