import React, { createContext, useState } from 'react';
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
import UpdateServices from '../UpdateServices/UpdateServices';
import AddProducts from '../../Admin/AddInstruments/AddProducts';
export const isAdminContext = createContext();
const Dashboard = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    return (

        <div>
            <isAdminContext.Provider value={[isAdmin, setIsAdmin]}>
                <Navigationbar></Navigationbar>
                <Router>

                    <div className="d-flex">
                        <div className="col-md-2">
                            <Sidebar></Sidebar>
                        </div>

                        <div className="col-md-10  mainbar-design">
                            <Switch>
                                <Route path="/dashboard/book">
                                    <Book></Book>
                                </Route>
                                <Route path="/serviceClaimed/:id">
                                    <Book></Book>
                                </Route>
                                <Route path="/dashboard/bookinglists">
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
                                <Route path="/dashboard/updateServices">
                                    <UpdateServices></UpdateServices>
                                </Route>
                                <Route path="/dashboard/instruments">
                                   <AddProducts></AddProducts>
                                </Route>

                            </Switch>
                        </div>


                    </div>
                </Router>
            </isAdminContext.Provider>
        </div>

    );
};

export default Dashboard;