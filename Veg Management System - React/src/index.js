import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import UserLogin from './Components/UserLogin'
import AdminLogin from './Components/AdminLogin'
import VendorLogin from './Components/VendorLogin'
import AdminDashboard from './Components/AdminDashboard'
import Customers from './Components/Customers'
import VendorVegList from './Components/VendorVegList'
import ManageVendors from './Components/ManageVendors';
import ManageCustomers from './Components/ManageCustomers';
import CustDetails from './Components/CustDetails';
import VendorDetails from './Components/VendorDetails';
import reportWebVitals from './reportWebVitals';
import OrderFinalization from './Components/OrderFinalization';
import VendorDashboard from './Components/VendorDashboard';
import VegReg from './Components/VegReg'
import CustomerRegistration from './Components/CustomerRegistration'
import VendorRegistration from './Components/VendorRegistration'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


ReactDOM.render(
  <Router>
     <Switch>
     <Route path = "/about" exact><App/> </Route>
     <Route path = "/login" exact render= { (props) => <UserLogin {...props} />} />
     <Route path = "/loginAdmin" exact render= { (props) => <AdminLogin {...props} />} />
     <Route path = "/loginvendor" exact render= { (props) => <VendorLogin {...props} />} />
     <Route path = "/dashboard" exact render= { (props) => <Customers {...props} />} />
     <Route path = "/dashboardAdmin" exact render= { (props) => <AdminDashboard {...props} />} />
     <Route path = "/vegetables" exact render= { (props) => <VendorVegList {...props} />} />
     <Route path = "/manageCust" exact render= { (props) => <ManageCustomers {...props} />} />
     <Route path = "/manageVens" exact render= { (props) => <ManageVendors {...props} />} />
     <Route path = "/customerdetails" exact render= { (props) => <CustDetails {...props} />} />
     <Route path = "/vendordetails" exact render= { (props) => <VendorDetails {...props} />} />
     <Route path = "/finalizeorder" exact render= { (props) => <OrderFinalization {...props} />} />
     <Route path = "/vendordashboard" exact render= { (props) => <VendorDashboard {...props} />} />
     <Route path = "/addVeg" exact render= { (props) => <VegReg {...props} />} />
     <Route path = "/custRegistration" exact render= { (props) => <CustomerRegistration {...props} />} />
    <Route path = "/venRegistration" exact render= { (props) => <VendorRegistration {...props} />} />
    </Switch>
  </Router>,
  document.getElementById("root"))


// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
