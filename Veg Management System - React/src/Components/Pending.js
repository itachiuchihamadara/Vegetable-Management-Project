import React from 'react'
import VendorService from '../Service/VendorService'
import OrderService from '../Service/OrderService'
import {Table} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
class Pending extends React.Component{
	constructor(props){
		super(props)
		this.state={ord:[]}
		this.approve = this.approve.bind(this)
	}

	componentDidMount(){
		VendorService.getOrdersByStatusAndVen(this.props.venId).
		then(response=>this.setState({ord:response.data}))
	}
	approve(id){
		OrderService.updateOrder(id)
		alert("Approved !")

	}

	render(){
		return(
			
			<Table striped bordered hover >
			<thead><tr> 
				<th>Id</th>
				<th>Vegetable</th>
				<th>Customer</th>
				<th>Quantity</th>
				<th>Vendor Name</th>
				<th>Status</th>
				<th>Total Price</th>
			</tr></thead>
			<tbody>
			{this.state.ord.map((order) => <tr>
				<th>{order.id}</th>
				<th>{order.vegetable.name}</th>
				<th>{order.customer.name}</th>
				<th>{order.qty}</th>
				<th>{order.vendor.name}</th>
				<th>{order.status}</th>
				<th>{order.total}</th>
				<Button variant = "outline-success"
				onClick = {()=>this.approve(order.id)}>Approve</Button>
				</tr>)}
			</tbody>
			</Table>
			);
	}
}

export default Pending
