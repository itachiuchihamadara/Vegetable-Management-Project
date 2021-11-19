import React from 'react'
import Card from 'react-bootstrap/Card'
import {Button} from 'react-bootstrap';
import {Table} from 'react-bootstrap';

import CustLogin from '../Service/CustLogin';

import VendorService from '../Service/VendorService';

class VendorProfile extends React.Component{
	constructor(props){
		super(props)
		this.state = {Ven : {}}
		this.changeVals = this.changeVals.bind(this)
		this.makeDefault = this.makeDefault.bind(this)
		this.makeUpdate = this.makeUpdate.bind(this)
		this.delete=this.delete.bind(this)
	}
	componentDidMount(){

		VendorService.getVendorById(this.props.venId).
		then((response) => this.setState({Ven : response.data}))
	}
	changeVals(event, id){

		var stateCopy = Object.assign({}, this.state.Ven);
		stateCopy[id] = event.target.value
		this.setState({Ven : stateCopy})

	}

	makeDefault(){
		VendorService.getVendorById(this.props.venId).
		then((response) => this.setState({Ven : response.data}))	
	}

	makeUpdate(){
		var ven = {id : parseInt(this.state.Ven.id), name : this.state.Ven.name,
			email : this.state.Ven.email, phn : this.state.Ven.phn, 
			password : this.state.Ven.password, address : this.state.Ven.address,
			description:this.state.Ven.description}
		VendorService.updateVendor(ven)
		alert("Updated Successfully")

	}
	delete(){
		VendorService.deleteVendorById(parseInt(this.state.Ven.id))
		this.props.history.goBack()
	}
	render(){
		return(
			<div className = "ven-details-container">
				<Button onClick={this.makeDefault}>Reset</Button>
				<Button onClick={this.makeUpdate}>Update details</Button>
				<Button onClick={this.delete}>Remove</Button>
				<Card className = "VendorDetails-Container" >
  					<Card.Body>		
    				<Table striped bordered hover className = "vendor-details-table">
      					<thead><tr> 
        				<th>Property</th>
        				<th>Value</th>
      					</tr>
      					</thead>
			      	<tbody>
				      <tr>
				        <th><h3>Id</h3></th>
				        <th><input id = "name" value = {this.state.Ven.id}
				            onChange = {(event) => this.changeVals(event, "id")}/></th>
				      </tr>
				      <tr>
				        <th><h3>Name</h3></th>
				        <th><input id = "name" value = {this.state.Ven.name}
				            onChange = {(event) => this.changeVals(event, "name")}/></th>
				      </tr>
				      <tr>
				        <th><h3>Address</h3></th>
				        <th><input id = "name" value = {this.state.Ven.address}
				            onChange = {(event) => this.changeVals(event, "address")}/></th>
				      </tr>
				      <tr>
				        <th><h3>Email</h3></th>
				        <th><input id = "name" value = {this.state.Ven.email}
				            onChange = {(event) => this.changeVals(event, "email")}/></th>
				      </tr>
				      <tr>
				        <th><h3>Phone</h3></th>
				        <th><input id = "name" value = {this.state.Ven.phn}
				            onChange = {(event) => this.changeVals(event, "phn")}/></th>
				      </tr>
				      <tr>
				        <th><h3>Password</h3></th>
				        <th><input id = "name" value = {this.state.Ven.password}
				            onChange = {(event) => this.changeVals(event, "password")}/></th>
				      </tr>
				      <tr>
				        <th><h3>Description</h3></th>
				        <th><input type="textarea" id = "name" value = {this.state.Ven.description}
				            onChange = {(event) => this.changeVals(event, "description")}/></th>
				      </tr>
				      </tbody>
				</Table>

  			</Card.Body>
		</Card>
</div>
			);
	}
}

export default VendorProfile