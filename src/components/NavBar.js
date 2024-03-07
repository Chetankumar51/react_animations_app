import React, { useState } from 'react';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    // const [activeLink, setactiveLink] = useState('home');
    const [scrolled, setscrolled] = useState(false);

    useEffect(()=>{
        const onScroll = () => {
            if(window.scrollY > 50){
                setscrolled(true);
            }else{
                setscrolled(false);
            }

        }

        window.addEventListener("scroll",onScroll);

        return () => window.addEventListener("scroll",onScroll);

    },[])


  return (
    <div>
        <Navbar expand="lg" className={scrolled?"scrolled":""} >
      <Container>
        <Navbar.Brand href="#home">
            <img src={''} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon' ></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">skills</Nav.Link>
            <Nav.Link href="#projects">projects</Nav.Link>
          </Nav>
          <span className='navbar-text' >
            <div className="social-icon">
                {/* <a href="#"><img src={} alt="" /></a>
                <a href="#"><img src={} alt="" /></a>
                <a href="#"><img src={} alt="" /></a> */}
            </div>
            <button className='vvd' onClick={() =>console.log("connect")} ><span>Let's connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar