import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home/Home'
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createContext, useState } from 'react';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Book from './Components/Dashboard/Book/Book';
// import ServiceClaimed from './Components/ServiceClaimed/ServiceClaimed';
import Footer from './Components/Home/Footer/Footer';
import About from './Components/About/About';
import Contact from './Components/Home/Contact/Contact';
import MainContact from './Components/MainContact/MainContact';
import AllProducts from './Components/AllProducts/AllProducts';
import SingleProduct from './Components/SingleProduct/SingleProduct';

export const userContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState([]);
  
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route  path='/home'>
            <Home></Home>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/allProducts">
            <AllProducts></AllProducts>
          </Route>
          <Route path="/contact">
            <MainContact></MainContact>
          </Route>
          <PrivateRoute path="/serviceClaimed/:id">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/productClaimed/:id">
            <SingleProduct></SingleProduct>
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
    </userContext.Provider>
  );
}

export default App;
