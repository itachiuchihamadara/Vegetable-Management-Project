import React from 'react'
import Card from 'react-bootstrap/Card'
import {Button} from 'react-bootstrap';
import {Table} from 'react-bootstrap';

import CustLogin from '../Service/CustLogin';

class CustProfile extends React.Component{
	constructor(props){
		super(props)
		this.state = {Cust : {}}
		this.changeVals = this.changeVals.bind(this)
		this.makeDefault = this.makeDefault.bind(this)
		this.makeUpdate = this.makeUpdate.bind(this)
		this.delete=this.delete.bind(this)
	}
	componentDidMount(){

		CustLogin.getDetails(this.props.custId).
		then((response) => this.setState({Cust : response.data}))
	}
	changeVals(event, id){

		var stateCopy = Object.assign({}, this.state.Cust);
		stateCopy[id] = event.target.value
		this.setState({Cust : stateCopy})

	}

	makeDefault(){
		CustLogin.getDetails(this.props.custId).
		then((response) => this.setState({Cust : response.data}))	
	}

	makeUpdate(){
		var cust = {id : parseInt(this.state.Cust.id), name : this.state.Cust.name,
			email : this.state.Cust.email, phn : this.state.Cust.phn, 
			password : this.state.Cust.password, address : this.state.Cust.address, 
			wallet:this.state.Cust.wallet}
		CustLogin.updateCustomer(cust)

		alert("Updated Successfully")

	}
	delete(){
		CustLogin.deleteCustById(parseInt(this.state.Cust.id))
		this.props.history.goBack()
	}
	render(){
		return(
			<div className = "cust-details-container">
				<Button onClick={this.makeDefault}>Reset</Button>
				<Button onClick={this.makeUpdate}>Update details</Button>
				<Button onClick={this.delete}>Remove</Button>
				<Card className = "CustDetails-Container" >
  					<Card.Body>		
    				<Table striped bordered hover className = "customer-details-table">
      					<thead><tr> 
        				<th>Property</th>
        				<th>Value</th>
      					</tr>
      					</thead>
			      	<tbody>
				      <tr>
				        <th><h3>Id</h3></th>
				        <th><input id = "name" value = {this.state.Cust.id}
				            onChange = {(event) => this.changeVals(event, "id")}/></th>
				      </tr>
				      <tr>
				        <th><h3>Name</h3></th>
				        <th><input id = "name" value = {this.state.Cust.name}
				            onChange = {(event) => this.changeVals(event, "name")}/></th>
				      </tr>
				      <tr>
				        <th><h3>Address</h3></th>
				        <th><input id = "name" value = {this.state.Cust.address}
				            onChange = {(event) => this.changeVals(event, "address")}/></th>
				      </tr>
				      <tr>
				        <th><h3>Email</h3></th>
				        <th><input id = "name" value = {this.state.Cust.email}
				            onChange = {(event) => this.changeVals(event, "email")}/></th>
				      </tr>
				      <tr>
				        <th><h3>Phone</h3></th>
				        <th><input id = "name" value = {this.state.Cust.phn}
				            onChange = {(event) => this.changeVals(event, "phn")}/></th>
				      </tr>
				      <tr>
				        <th><h3>Password</h3></th>
				        <th><input id = "name" value = {this.state.Cust.password}
				            onChange = {(event) => this.changeVals(event, "password")}/></th>
				      </tr>
				      <tr>
				        <th><h3>Wallet</h3></th>
				        <th><input id = "name" value = {this.state.Cust.wallet}
				            onChange = {(event) => this.changeVals(event, "wallet")}/></th>
				      </tr>
				      </tbody>
				</Table>

  			</Card.Body>
		</Card>
</div>
			);
	}
}

export default CustProfile