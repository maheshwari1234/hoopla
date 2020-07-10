import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Agent from './components/Agent';
import EditProduct from './components/EditProduct';
import AddProduct from './components/Addproduct'
import DeleteProduct from './components/DeleteProduct'


import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

class App extends React.Component{
  render(){
    return(
      <Router>
        
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/agent" component={Agent}/>
        <Route exact path="/editProduct" component={EditProduct}/>
        <Route exact path="/addProduct" component={AddProduct}/>
        <Route exact path="/deleteProduct" component={DeleteProduct}/>


        

        </Switch>
        </Router>
        

    )
  }
}


export default App;
