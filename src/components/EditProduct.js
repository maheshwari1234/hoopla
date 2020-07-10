import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Form } from 'react-bootstrap'
import {Pen} from 'react-bootstrap-icons';
import Navbar from './Navbar'


class Editt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                pName:"",
                quantity:"",
                price:"",
                discount:""
            },
            successMessage: "",
            errorMessage: ""
        }
    }


    handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState({ form: { ...this.state.form, [name]: value } })
    }

    handleSubmit = (e) => {
        e.preventDefault();

this.setState({successMessage:"Product added Successfully"})
this.props.history.push("/agent")
    }

    render() {
        const { form } = this.state
        return (
            
            <React.Fragment>
               <Navbar></Navbar>
                <div className="row">
                    <div className="col-md-4 offset-4">
                        <div className="card mt-5" > 
                            <div className="card-body">
                                <center><Pen style={{color: 'deeppink', fontSize: '35' }} /></center>
                                
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group margin="normal">
                                        <Form.Label style={{color:'darkblue'}}>Product Name<span className="text-danger">*</span></Form.Label>
                                        <Form.Control type="text" placeholder="Enter Product Name" name="pName" id="pname"
                                            onChange={this.handleChange} value={form.pName} />
                                        {/* <span className="text-danger">{this.state.error.emailError}</span> */}
                                    </Form.Group>

                                    <Form.Group  margin="normal">
                                        <Form.Label style={{color:'darkblue'}}>Price<span className="text-danger">*</span></Form.Label>
                                        <Form.Control type="number" placeholder="Price of product" name="price" id="Price"
                                            onChange={this.handleChange} value={form.price} />
                                        {/* <span className="text-danger">{this.state.error.passwordError}</span> */}
                                    </Form.Group>

                                    <Form.Group  margin="normal">
                                        <Form.Label style={{color:'darkblue'}}>Quantity<span className="text-danger">*</span></Form.Label>
                                        <Form.Control type="number" placeholder="Quantity of product" name="quantity" id="Quantity"
                                            onChange={this.handleChange} value={form.quantity} />
                                    </Form.Group>
                                    <Form.Group  margin="normal">
                                        <Form.Label style={{color:'darkblue'}}>Discount<span className="text-danger">*</span></Form.Label>
                                        <Form.Control type="number" placeholder="Discount for product" name="discount" id="Discount"
                                            onChange={this.handleChange} value={form.discount} />
                                    </Form.Group>

                                    <Button variant="warning" type="submit" className="btn btn-block">
                                       Submit</Button>
                                    <span className="text-success" style={{fontSize:20}}>{this.state.successMessage}</span>
                                </Form>
                                
                              
                            </div>
                        </div>
                    </div>
                </div>


            </React.Fragment>


        )
    }
}

export default Editt;