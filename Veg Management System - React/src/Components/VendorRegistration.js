import React from 'react'
import NavBarAdmin from './NavBarAdmin';
import {Table} from 'react-bootstrap';
import {Button} from 'react-bootstrap'
import VendorService from '../Service/VendorService';


class VendorRegistration extends React.Component{

		constructor(props){
			super(props)
			this.register=this.register.bind(this)
		}
		register(){
			const ven = {id : parseInt(document.getElementById("id").value), 
				name : document.getElementById("name_").value,
				password : document.getElementById("password").value,
				email :  document.getElementById("email").value,
				phn : "",
				address : "",
				description : ""
				}
			VendorService.addVen(ven)
			alert("Successfully registered")
			this.props.history.goBack()
		}

		render(){

		return(

			<div>
			<NavBarAdmin username="register"/>
			<h3 style = {{margin : "30px"}}>Register here:</h3>
			<Table className="cust-reg" style = {{width : '50%', margin : '120px'}}>
			<thead>
			<tr>
			<td>Property</td>
			<td>Value</td>
			</tr>
			</thead>
			<tbody>
			<tr>
			<td>Id</td>
			<td><input id = "id" style = {{width : '100%'}}/></td>
			</tr>
			<tr>
			<td>Name</td>
			<td><input id = "name_" style = {{width : '100%'}}/></td>
			</tr>
			<tr>
			<td>Email</td>
			<td><input id = "email" style = {{width : '100%'}}/></td>
			</tr>
			<tr>
			<td>Password</td>
			<td><input id = "password" style = {{width : '100%'}}/></td>
			</tr>
			</tbody>
			</Table>
			<Button onClick={this.register} style = {{marginLeft : '110px'}}>Register</Button>
				</div>

				);
		}
}



export default VendorRegistration