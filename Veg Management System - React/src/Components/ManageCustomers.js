import React from 'react';
import CustLogin from '../Service/CustLogin';
import NavBarAdmin from './NavBarAdmin';
import {Table} from 'react-bootstrap';

class ManageCustomers extends React.Component{
	constructor(props){
		super(props)
		this.state = {allCusts : []}
		this.handleViewDetails = this.handleViewDetails.bind(this)

	}
	componentDidMount(){
		if(this.props.username === "Admin")
		CustLogin.getAllCustomers().then((response) => this.setState({allCusts : response.data}))
	}

	handleViewDetails(custs){
		this.props.history.push({pathname:"/customerdetails",
			state : {cust : custs}
	})
	}

	render(){
		return(
			<div className="manage-custs-list">
			<h3>Manage all Customers</h3>
			<Table striped bordered hover >
			<thead><tr> 
				<th>Id</th>
				<th>Name</th>
				<th>Address</th>
				<th>Mobile No.</th>
			</tr></thead>
			<tbody>
			{this.state.allCusts.map((custs) => <tr>
				<th>{custs.id}</th>
				<th>{custs.name}</th>
				<th>{custs.address}</th>
				<th>{custs.phn}</th>
				<button onClick = {() => this.handleViewDetails(custs.id)}>View Details</button>
				</tr>)}
			</tbody>
			</Table>
			</div>
			);
	}


}

export default ManageCustomers