import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Form } from 'react-bootstrap'
import {Pen} from 'react-bootstrap-icons';
import Navbar from './Navbar'


class AddProduct extends React.Component {
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

this.setState({successMessage:"Product edited Successfully"})
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
                                <center><Pen style={{color: 'balck', fontSize: '35' }} /></center>
                                
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group margin="normal">
                                        <Form.Label style={{color:'#FF1493'}}>What do you want to sell?<span className="text-danger">*</span></Form.Label>
                                        <Form.Control type="text" placeholder="Enter Product Name" name="pName" id="pname"
                                            onChange={this.handleChange} value={form.pName} />
                                        {/* <span className="text-danger">{this.state.error.emailError}</span> */}
                                    </Form.Group>

                                    <Form.Group  margin="normal">
                                        <Form.Label style={{color:'#FF1493'}}>At what price you want to sell?<span className="text-danger">*</span></Form.Label>
                                        <Form.Control type="number" placeholder="Price of product" name="price" id="Price"
                                            onChange={this.handleChange} value={form.price} />
                                        {/* <span className="text-danger">{this.state.error.passwordError}</span> */}
                                    </Form.Group>

                                    <Form.Group  margin="normal">
                                        <Form.Label style={{color:'#FF1493'}}>How many products you want to sell?<span className="text-danger">*</span></Form.Label>
                                        <Form.Control type="number" placeholder="Quantity of product" name="quantity" id="Quantity"
                                            onChange={this.handleChange} value={form.quantity} />
                                    </Form.Group>
                                    <Form.Group  margin="normal">
                                        <Form.Label style={{color:'#FF1493'}}>Any discount you want to offer?<span className="text-danger">*</span></Form.Label>
                                        <Form.Control type="number" placeholder="Discount for product" name="discount" id="Discount"
                                            onChange={this.handleChange} value={form.discount} />
                                    </Form.Group>

                                    <Button variant="secondary" type="submit" className="btn btn-block">
                                       Add Product</Button>
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

export default AddProduct;