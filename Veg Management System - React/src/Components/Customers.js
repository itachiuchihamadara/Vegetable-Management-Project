import React from 'react';
import CustLogin from '../Service/CustLogin';
import NavBarUser from './NavBarUser.js';
import VendorService from '../Service/VendorService';
import VendorList from './VendorList';

class Customers extends React.Component{

    constructor(props){
        super(props)
        this.state = {userdetails : null, venArray:[]}
    }
    componentDidMount(){
            CustLogin.getDetails(this.props.location.state.userid).then((response)=>{
            this.setState({userdetails : response.data.name})})
            VendorService.getAllVendors().then((res)=>{
            this.setState({venArray: res.data})})
            console.log(this.state.venArray)
            

    }

    render(){
        return(
        <div className = "nav-user-root">
            <NavBarUser username = {this.state.userdetails} userId = {this.props.location.state.userid}
            history = {this.props.history}/>
            <h4 style={{margin:'20px'}}>Vendors near you..</h4>
            <div className = "vendor-tab">
                {this.state.venArray.map((vens) =>
                <VendorList key = {vens.id} venObj = {vens} history = {this.props.history}
                userName = {this.state.userdetails} userId = {this.props.location.state.userid}
                />)}
            </div>
            <div className = "veg-tab">

            </div>
        </div>

            );

}

}

export default Customers