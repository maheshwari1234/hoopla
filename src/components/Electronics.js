import React from 'react';
import { Image, Button } from 'react-bootstrap'
import data from './electronics.json';
import { PlusSquare, FileMinus } from 'react-bootstrap-icons';


const Mobiles = data.Mobiles;
const TV = data.TV;
const Laptop = data.Laptop

class Electronics extends React.Component {
    constructor(props) {
        super(props)
        // console.log("electronics", props.match.params.category)
        this.state = {
            quantity: 1
        }
    }

    buttonClicked = (name) => {
        console.log("item to add to cart", name)
        this.props.history.push('/cart/' + name)
    }

    increase = () => {
        this.setState({ quantity: this.state.quantity + 1 })
        console.log("increase", this.state.quantity)
    }
    decrease = () => {
        this.setState({ quantity: this.state.quantity - 1 })
        console.log("decrese", this.state.quantity)
    }


    render() {
        if (this.props.match.params.category === "Mobiles") {
            return (
                <React.Fragment>
                    <div class="row">
                        {Mobiles.map((item, i) => {
                            return (
                                <div class="col-md-6">
                                    <div key={i}>
                                        <div class="card">
                                            <div class="card-header">
                                                <h4>{item.Name}</h4>
                                            </div>
                                            <div class="card-body">

                                                {
                                                    item.About.map((res, i) => {
                                                        console.log("Image", res.Image)
                                                        return (
                                                            <React.Fragment>
                                                                <h5 class="card-title" style={{ color: 'Red' }}>{res.Model}</h5>
                                                                <a href="/home">

                                                                    <center>
                                                                        <Image src="data:image/jpeg;base64,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" onClick={() => { this.handleChange(item.Name) }} alt="image not found" />
                                                                    </center>

                                                                </a>

                                                                <div class="card-footer">
                                                                    <span style={{ fontWeight: 'bold', color: 'Blue' }}>Price: </span>
                                                                    <span style={{ fontWeight: 'bold' }}>{res.Price}</span><br />
                                                                    <span style={{ fontWeight: 'bold', color: 'Blue' }}>Description: </span>

                                                                    <span style={{ fontWeight: 'bold' }}>{res.description}</span><br />

                                                                    {/* <span style={{ fontWeight: 'bold', color: 'Blue' }}>Quantity:</span>
                                                                    <span style={{ fontWeight: 'bold' }}>{this.state.quantity}</span> */}

                                                                    {/* <br /> */}
                                                                    <Button variant="warning" onClick={() => this.buttonClicked(res.Model)} className="btn btn-block">Add To Cart</Button>
                                                                    <Button className="btn btn-block">Quantity: <PlusSquare fontSize="20px" onClick={this.increase} ></PlusSquare><FileMinus fontSize="23px" onClick={this.decrease}></FileMinus></Button>
                                                                </div>
                                                            </React.Fragment>
                                                        );
                                                    })
                                                }
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
        else if (this.props.match.params.category === "TV") {
            return (
                <React.Fragment>
                    <div class="row">
                        {TV.map((item, i) => {
                            return (
                                <div class="col-md-6">
                                    <div key={i}>
                                        <div class="card">
                                            <div class="card-header">
                                                <h4>{item.Name}</h4>
                                            </div>
                                            <div class="card-body">

                                                {
                                                    item.About.map((data, i) => {

                                                        return (
                                                            <React.Fragment>

                                                                <h5 class="card-title" style={{ color: 'Red' }}>{data.Model}</h5>
                                                                <a href="/home">

                                                                    <center>
                                                                        <Image src="data:image/jpeg;base64,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" fluid onClick={() => { this.handleChange(item.Name) }} alt="image not found" />
                                                                    </center>

                                                                </a>

                                                                <div class="card-footer">
                                                                    <span style={{ fontWeight: 'bold', color: 'Blue' }}>Price: </span>
                                                                    <span style={{ fontWeight: 'bold' }}>{data.Price}</span><br />
                                                                    <span style={{ fontWeight: 'bold', color: 'Blue' }}>Description: </span>
                                                                    <span style={{ fontWeight: 'bold' }}>{data.description}</span>
                                                                    <Button variant="warning" onClick={() => this.buttonClicked(data.Model)} className="btn btn-block">Add To Cart</Button>
                                                                    <Button className="btn btn-block">Quantity: <PlusSquare fontSize="20px" onClick={this.increase} ></PlusSquare><FileMinus fontSize="23px" onClick={this.decrease}></FileMinus></Button>

                                                                </div><br /><br />
                                                            </React.Fragment>
                                                        );
                                                    })
                                                }
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
        else {
            return (
                <React.Fragment>
                    <div class="row">
                        {Laptop.map((item, i) => {
                            return (
                                <div class="col-md-6">
                                    <div key={i}>
                                        <div class="card">
                                            <div class="card-header">
                                                <h4>{item.Name}</h4>

                                            </div>
                                            <div class="card-body">

                                                {
                                                    item.About.map((data, i) => {

                                                        return (
                                                            <React.Fragment>


                                                                <h5 class="card-title" style={{ color: 'Red' }}>{data.Model}</h5>
                                                                <a href="/home">

                                                                    <center>
                                                                        <Image src="data:image/jpeg;base64,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" fluid onClick={() => { this.handleChange(item.Name) }} alt="image not found" />
                                                                    </center>

                                                                </a>

                                                                <div class="card-footer">
                                                                    <span style={{ fontWeight: 'bold', color: 'Blue' }}>Price: </span>
                                                                    <span style={{ fontWeight: 'bold' }}>{data.Price}</span><br />
                                                                    <span style={{ fontWeight: 'bold', color: 'Blue' }}>Description: </span>

                                                                    <div style={{ fontWeight: 'bold' }}>{data.description}</div><br />
                                                                    <center>
                                                                        <Button variant="warning" onClick={() => this.buttonClicked(data.Model)} className="btn btn-block">Add To Cart</Button>
                                                                    <Button className="btn btn-block">Quantity: <PlusSquare fontSize="20px" onClick={this.increase} ></PlusSquare><FileMinus fontSize="23px" onClick={this.decrease}></FileMinus></Button>

                                                                    </center>
                                                                </div><br /><br />
                                                            </React.Fragment>
                                                        );
                                                    })
                                                }
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
}


export default Electronics;