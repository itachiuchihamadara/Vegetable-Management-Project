import React from 'react';
import CustLogin from '../Service/CustLogin';
import { Redirect } from 'react-router';
import { useHistory } from 'react-router-dom';
import NavBar from './NavBar';
class AdminLogin extends React.Component{
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
            const cust = {id : parseInt(this.state.userid), name : "null",
            password : this.state.password}
            CustLogin.checkLoginAdmin(cust)
            .then((response) => {this.setState({userlogin : response.data.login})})

            if(this.state.userlogin === "true")
                this.props.history.push({pathname : "/dashboardAdmin", state : {userid : this.state.userid, 
                    username : "Admin"}})
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
                <button type="button" onClick= {this.formHandle}>Login</button>
            </form>
            </>
        );
    }
}
export default AdminLogin