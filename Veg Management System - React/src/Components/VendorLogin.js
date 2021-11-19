import React from 'react';
import VendorService from '../Service/VendorService';
import { Redirect } from 'react-router';
import { useHistory } from 'react-router-dom';
import NavBar from './NavBar';
import {Button} from 'react-bootstrap';
class VendorLogin extends React.Component{
    constructor(props){
        super(props)
        this.state = {userlogin:"null", userName : null}
        this.formHandle = this.formHandle.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleId = this.handleId.bind(this)
    }
     handleId(event){
        this.setState({userid : event.target.value})
    }
    handlePassword(event){
        this.setState({password : event.target.value})
    }   
    formHandle(){
            const ven = {id : parseInt(this.state.userid), name : "null",
            password : this.state.password, phn : "null",
            email : "null", address : "bull", description : "null" }
            VendorService.checkLoginVendor(ven)
            .then((response) => {this.setState({userlogin : response.data.login})})

            if(this.state.userlogin === "true"){
                this.props.history.push({pathname : "/vendordashboard", 
                    state : {venId : this.state.userid, 
                    username : this.state.userName}})
                }
}           
    render(){
            return(
            <>
            <NavBar/>
            <form>
                <input type="text"  placeholder = "userId"
                onChange = {this.handleId}/>
                <input type="password"  placeholder = "Password"
                onChange = {this.handlePassword}/>
                <Button type="button" onClick= {this.formHandle}>Login</Button>
            </form>
            </>
        );
    }
}
export default VendorLogin