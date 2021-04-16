import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Book from '../Book/Book';
import BookingLists from '../BookingLists/BookingLists';
import Review from '../Review/Review';
import './Dashboard.css';
import OrderList from '../../Admin/OrderList/OrderList';
import MakeAdmin from '../../Admin/MakeAdmin/MakeAdmin';
import AddServices from '../../Admin/AddServices/AddServices';
import Navigationbar from '../../../Components/Home/Navigationbar/Navigationbar'
const Dashboard = () => {
    return (
        
        <Router>
            <Navigationbar></Navigationbar>
                <div className="d-flex">
                    <div className="col-md-2">
                        <Sidebar></Sidebar>
                    </div>
                    
                    <div  className="col-md-10  mainbar-design">
                    <Switch>
                            <Route path="/dashboard/book">
                                <Book></Book>
                            </Route>
                            <Route  path="/dashboard/bookinglists">
                                <BookingLists></BookingLists>
                            </Route>
                            <Route path="/dashboard/review">
                                <Review></Review>
                                <h1>Hello</h1>
                            </Route>
                            <Route path="/dashboard/orderlist">
                                <OrderList></OrderList>
                            </Route>
                            <Route path="/dashboard/makeadmin">
                                <MakeAdmin></MakeAdmin>
                            </Route>
                            <Route path="/dashboard/addservices">
                                <AddServices></AddServices>
                            </Route>
    
                            </Switch>
                    </div>
                    

                </div>
        </Router>
    );
};

export default Dashboard;