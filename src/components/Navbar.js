import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Card, Image } from 'react-bootstrap'


class Home extends React.Component {


    render() {
        return (
            <React.Fragment>
                <Navbar bg="primary" variant="dark">
                  <Navbar.Brand href="/home">
          <img src="./logo.jpg" style={{width:100, marginTop: -7,height:50}} />
        
        </Navbar.Brand>
                
                    <Nav className="mr-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                    </Nav>
                </Navbar>


            </React.Fragment>



        )
    }
}


export default Home;