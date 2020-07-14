import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Agent from './components/Agent';
import EditProduct from './components/EditProduct';
import AddProduct from './components/Addproduct';
import DeleteProduct from './components/DeleteProduct';
import Electronics from './components/Electronics';
import Detail from './components/Details';
import Simple from './components/simple'
import Cart from './components/Cart'


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
        <Route exact path="/products/:category" component={Detail}/>
        <Route exact path="/products/Electronics/:category" component={Electronics}/>
        <Route exact path="/cart/:name" component={Cart}/>



        </Switch>
        </Router>
    )
  
  }
}


export default App;
