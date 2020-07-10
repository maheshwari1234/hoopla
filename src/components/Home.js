import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Card, Image } from 'react-bootstrap'
import data from './categories.json'

const categories = data.Category;

class Home extends React.Component {


    render() {
        return (
            <React.Fragment>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="/home">   <img src="./logo.jpg" style={{width:100, marginTop: -7}} /></Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/agent">Agent</Nav.Link>

                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                </Navbar><br/>

                <div class="row">
                    {categories.map((item, i) => {
                        return (
                            <div class="col-sm-4">
                                <div key={i}>
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title" style={{color:''}}>{item.Name}</h5>
                                            <a href="/home">
                                            <Image src={item.Image} fluid/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        );
                    })
                    }

                </div>


            </React.Fragment>



        )
    }
}


export default Home;