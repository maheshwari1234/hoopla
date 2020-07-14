import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Table, Button} from 'react-bootstrap';


class Cart extends React.Component{
    constructor(props){
        super(props)
        this.state={
            successMessage:""

        }
        console.log("props in cart",props.match.params.name)
    }

    check=()=>{
        this.setState({successMessage:"Check out successfully"})

    }
    render(){
        return(
            

            <React.Fragment>
               
                <div class="row">
                    <div class=" offset-3 col-sm-4"><br/>
            <center><h2 style={{color:"deeppink"}}>My Cart</h2></center>
            
            <Table border='2.5px solid black'>
  <thead >
    <tr >
    
      <th style={{color:'Blue'}}>Product Name</th>
      <th style={{color:'Blue'}}>Price</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      
        <td style={{color:'black'}}>{this.props.match.params.name}</td>
        <td style={{color:'black'}}>2500</td>
       

    </tr>
    <tr>
      
      <td style={{color:'black'}}>Puma Shoe</td>
      <td style={{color:'black'}}>3000</td>
     

  </tr>
   
  </tbody>
  
      
 <tfoot>
     <td style={{color:'darkorange',backgroundColor:'lightyellow'}}>Total Price</td>
        <td style={{color:'limegreen',backgroundColor:'lightyellow'}}>{2500+3000}</td>
 </tfoot>
 
  

</Table>
<Button variant="info" className="btn btn-block" onClick={this.check}>Check Out</Button>
<span style={{color:"limegreen",fontSize:"20px"}}>{this.state.successMessage}</span>

</div>
</div>
</React.Fragment>

        )
    }
}

export default Cart