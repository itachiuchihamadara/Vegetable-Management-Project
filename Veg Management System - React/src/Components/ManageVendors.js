import React from 'react';
import VendorService from '../Service/VendorService';
import {Table} from 'react-bootstrap';
class ManageVendors extends React.Component{
	constructor(props){
		super(props)
		this.state = {allVens : []}
		this.handleViewDetails = this.handleViewDetails.bind(this)

	}
	componentDidMount(){
		if(this.props.username === "Admin")
		VendorService.getAllVendors().then((response) => this.setState({allVens : response.data}))
	}

	handleViewDetails(vendorId){
		this.props.history.push({pathname:"/vendordetails",
			state : {venId : vendorId}
	})
	}

	render(){
		return(
			<div className="manage-custs-list">
			<h3>Manage all Vendors</h3>
			<Table striped bordered hover >
			<thead><tr> 
				<th>Id</th>
				<th>Name</th>
				<th>Address</th>
				<th>Mobile No.</th>
			</tr></thead>
			<tbody>
			{this.state.allVens.map((vens) => <tr>
				<th>{vens.id}</th>
				<th>{vens.name}</th>
				<th>{vens.address}</th>
				<th>{vens.phn}</th>
				<button onClick = {() => this.handleViewDetails(vens.id)}>View Details</button>
				</tr>)}
			</tbody>
			</Table>
			</div>
			);
	}

}

export default ManageVendors