import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Card, Image } from 'react-bootstrap'
import data from './categories.json';

const categories = data.Category;

class Home extends React.Component {

    constructor(props) {
        super(props)

        console.log(this.props.history.location.role)
    }

    handleChange = (category) => {
        console.log("category", category)
        this.props.history.push("/products/" + category)
    }

    render() {
        return (
            <React.Fragment>

                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="/home">   <img src="./logo.jpg" style={{ width: 100, marginTop: -7 }} /></Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/agent">Agent</Nav.Link><br />
                        <Nav.Link>                                     </Nav.Link>

                        <h4 style={{ color: "yellow" }}>Logged in as {this.props.history.location.role}</h4>

                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                </Navbar><br />

                <div class="row">
                    {categories.map((item, i) => {
                        return (
                            <div class="col-sm-6">
                                <div key={i}>
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title" style={{ color: 'blue' }}>{item.Name}</h5>
                                            

                                            <Image src={item.Image} fluid onClick={() => { this.handleChange(item.Name) }} />

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