import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Startreading from "./components/screens/startreading/Startreading";
import Write from "./components/screens/write/write";
import Login from "./components/Login/login";
// import Slider from './components/screens/Slider/slider';
// import images from "./images";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Interests from "./components/Interests/Interests";
import Footer from "./components/Footer/Footer";
import loader from "./components/loader/loader";

const App = () => {
   window.addEventListener("scroll",e=>{
     const navbar=document.getElementById("navbar")
     const navHeight=navbar.getBoundingClientRect().height;
     const _Y=window.pageYOffset
     if(_Y>navHeight){
      navbar.style.position='fixed'
    }else{
       navbar.style.position='relative'

    }
   })
  return (
    <>
      <BrowserRouter>
        <Navbar bg="light" expand="lg" className="fs-6 flex-grow-3 py-3 bg-secondary" id="navbar" style={{width:"100%",top:0,zIndex:9}}>
          <Container>
            <Navbar.Brand href="#home">Audrea</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/home">
                  Home{" "}
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/login">
                  SignUp
                </Nav.Link>
                <NavDropdown title="Interests" id="basic-nav-dropdown">
                  {["Adventure", "Crime", "Fantasy", "Romance", "Science", "Fiction", "Comedy"].map((item, index) => {
                    return (
                      <>
                        <NavDropdown.Item
                          href={`interests/${item.toLowerCase()}`}
                        >
                          {item}
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                      </>
                    );
                  })}
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route element={<Navigate to="/home" />} path="/" />
          <Route element={<Home />} path="/home" />
          <Route element={<About />} path="/about" />
          <Route element={<Startreading />} path="/startreading" />
          <Route element={<Write />} path="/write" />
          <Route element={<Login />} path="/login" />
          <Route element={<Interests />} path="/interests/:subject" />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
