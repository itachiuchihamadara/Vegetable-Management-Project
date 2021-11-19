import React from 'react';
import VendorService from '../Service/VendorService'
import {Table} from 'react-bootstrap';

class VendorOrderHistory extends React.Component{

		constructor(props){
			super(props)
			this.state = {orders : []}
		}

		componentDidMount(){

			VendorService.getOrdersById(this.props.venId).then((response)=>this.setState({orders : 
				response.data}))
		}

		render(){

			return(<div>

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
			{this.state.orders.map((order) => <tr>
				<th>{order.id}</th>
				<th>{order.vegetable.name}</th>
				<th>{order.customer.name}</th>
				<th>{order.qty}</th>
				<th>{order.vendor.name}</th>
				<th>{order.status}</th>
				<th>{order.total}</th>
				</tr>)}
			</tbody>
			</Table>
				</div>);
		}
}

export default VendorOrderHistory