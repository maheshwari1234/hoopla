import React from 'react';
import {Image, Button, Navbar } from 'react-bootstrap'
import data from './detail.json';


const Electronic = data.Electronics;
const Fashion = data.Fashion;
const Grocery = data.Grocery;
const Furniture = data.Furniture;

class Home extends React.Component {

    constructor(props){
        super(props)

    }

    handleChange=(category)=>{
        console.log("category",category)
        this.props.history.push("/products/"+this.props.match.params.category+"/"+category)
    }



    render() {
        if(this.props.match.params.category==="Electronics"){
            return (
                <React.Fragment>
                   <Navbar bg="info" variant="dark">
            <Navbar.Brand href="/home">
          <img src="http://localhost:3000/logo.jpg" style={{width:100, marginTop: -7,height:50}} />
        
        </Navbar.Brand>
        
                        <h1 style={{color:'white'}}>Electronics products</h1>
                    
               
    
  </Navbar>
  <br/>
                    <div class="row">
                        {Electronic.map((item, i) => {
                            console.log(item.Image)
                            return (
                                <div class="col-sm-6">
                                    <div key={i}>
                                        <div class="card">
                                            <div class="card-body">
                                                <h5 class="card-title" style={{color:'deeppink'}}>{item.Name}</h5>  
                                                <Image src="http://localhost:3000/electronic.jpg" fluid onClick={()=>{this.handleChange(item.Name)}} alt="image not found"/>
                                            </div>
                                            {/* <div class="card-footer"> */}
                                                <Button variant="warning" onClick={()=>{this.handleChange(item.Name)}}>View More</Button>
                                                {/* </div> */}

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
        else if(this.props.match.params.category==="Fashion"){
            return (
                <React.Fragment>
                    <div class="row">
                        {Fashion.map((item, i) => {
                            console.log(item.Image)
                            return (
                                <div class="col-sm-6">
                                    <div key={i}>
                                        <div class="card">
                                            <div class="card-body">
                                                <h5 class="card-title" style={{color:'blue'}}>{item.Name}</h5>  
                                                {/* <Image src={item.Image} fluid onClick={()=>{this.handleChange(item.Name)}} alt="image not found"/> */}
                                                                        <Image src="http://localhost:3000/fashion.png" fluid onClick={() => { this.handleChange(item.Name) }} alt="image not found" />
                                                
                                            </div>
                                            <Button variant="primary" onClick={()=>{this.handleChange(item.Name)}}>View More</Button>

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
        else if(this.props.match.params.category==="Grocery"){
            return (
                <React.Fragment>
                    <div class="row">
                        {Grocery.map((item, i) => {
                            return (
                                <div class="col-sm-6">
                                    <div key={i}>
                                        <div class="card">
                                            <div class="card-body">
                                                <h5 class="card-title" style={{color:'blue'}}>{item.Name}</h5>  
                                                <Image src="http://localhost:3000/grocery.jpg" fluid onClick={()=>{this.handleChange(item.Name)}} alt="image not found"/>
                                                
                                            </div>
                                            <Button variant="primary" onClick={()=>{this.handleChange(item.Name)}}>View More</Button>

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
        else {
            return (
                <React.Fragment>
                    <div class="row">
                        {Furniture.map((item, i) => {
                            return (
                                <div class="col-sm-6">
                                    <div key={i}>
                                        <div class="card">
                                            <div class="card-body">
                                                <h5 class="card-title" style={{color:'blue'}}>{item.Name}</h5>  
                                                <Image src="http://localhost:3000/Furniture.jpg" fluid onClick={()=>{this.handleChange(item.Name)}} alt="image not found"/>
                                                
                                            </div>
                                            <Button variant="primary" onClick={()=>{this.handleChange(item.Name)}}>View More</Button>

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
        
        
    }



export default Home;