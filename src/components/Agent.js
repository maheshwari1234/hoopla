import React from 'react';

import {Table,Button,Navbar,Nav} from 'react-bootstrap';
import {Pen,TrashFill} from 'react-bootstrap-icons';
import Navbarr from './Navbar'


class Agent extends React.Component{

    constructor(props){
        super(props)

    }

    editProduct=()=>{
        this.props.history.push("/editProduct")
    }

    addProduct=()=>{
        this.props.history.push("/addProduct")
    }

    deleteProduct=()=>{
        this.props.history.push("/deleteProduct")
    }
    render(){
        return(
            <React.Fragment>
                {/* <Navbarr></Navbarr> */}
            <Navbar bg="secondary" variant="dark">
            <Navbar.Brand href="/home">
          <img src="./logo.jpg" style={{width:100, marginTop: -7,height:50}} />
        
        </Navbar.Brand>
        {/* <Nav className="mr-auto">
                        <Nav.Link href="/home">Home</Nav.Link>{'     '} */}
                        <h1 style={{color:'yellow'}}>Hoopla Agents</h1>
                    {/* </Nav> */}
               
    
  </Navbar>

                <center>
                    <h1 className="text-info">Welcome John,these are your Products</h1></center>
                    <br/>
                <Table border='2px solid black'>
  <thead >
    <tr >
      <th>Product Id</th> 
      <th>Product Name</th>
      <th>Price</th>
      <th>Discount</th>
      <th>Quantity</th>
      <th>Edit</th>
      <th>Delete</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Puma Shoes</td>
      <td>2500</td>
      <td>20%</td>
      <td>30</td>
      <td><Pen onClick={this.editProduct}/></td>
      <td><TrashFill onClick={this.deleteProduct}/></td>

    </tr>
    <tr>
    <td>2</td>
      <td>Laptop</td>
      <td>40000</td>
      <td>30%</td>
      <td>25</td>
      <td><Pen onClick={this.editProduct}/></td>
      <td><TrashFill onClick={this.deleteProduct}/></td>
    </tr>
  </tbody>
 
  

</Table>
<center>
      <Button variant="info" onClick={this.addProduct}>Add Product</Button>
      </center>
</React.Fragment>
        )
    }
}

export default Agent