import React from 'react';
import CustLogin from '../Service/CustLogin'
import VendorService from '../Service/VendorService'
import OrderService from '../Service/OrderService'
import NavBarUser from './NavBarUser';
import {Button} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import {Alert} from 'react-bootstrap';
class OrderFinalization extends React.Component{
	constructor(props){
		super(props)
		this.state = {custObj : {}, venObj : {}, vegArr : []}
		this.total = 0
		this.placeOrder = this.placeOrder.bind(this)
		this.confirm = this.confirm.bind(this)
	}
	componentDidMount(){

		CustLogin.getDetails(this.props.location.state.custId).
		then((response)=>this.setState({custObj:response.data}))
		VendorService.getVendorById(this.props.location.state.venId).
		then((response)=>this.setState({venObj:response.data}))
		var cart = this.props.location.state.cart
		
		for(const ords of cart){
			this.total += parseInt(ords.price)*parseInt(ords.quantity)
			VendorService.getVegById(ords.id).then(response =>
				this.setState({vegArr : [...this.state.vegArr, response.data]}))
		}



	}
	confirm(){

		if (window.confirm('Are you sure you want to finalize the order?')) {
  
  			this.placeOrder()
		} else {
  				console.log("whoops")
			}

}
	placeOrder(){

		var i = 0
		for(const ords of this.props.location.state.cart){
			var order_total = parseInt(ords.price)*parseInt(ords.quantity)
			var ord = {status : "pending", qty : ords.quantity, 
				total : order_total, customer : this.state.custObj,
				vendor : this.state.venObj, vegetable : this.state.vegArr[i]
			}
				OrderService.makeOrder(ord)
			i += 1
		}
		var upCust = {...this.state.custObj}
		upCust.wallet -= this.total
		CustLogin.updateCustomer(upCust)
		alert("Successfully Placed the order")
		this.props.history.goBack()

	}
	render(){
		return(<div>
			<NavBarUser userId={this.state.custObj.id}
			 username = {this.state.custObj.name} history={this.props.history}/>
			<h3 style = {{margin : "30px"}}>Your Order details for {this.state.venObj.name}</h3>
			<h4 style = {{marginTop : "100px", marginLeft : '120px'}}>Your Bill is</h4>
			<Table striped bordered hover style = {{width : '50%', marginLeft : '120px'}}>
                		<thead><tr>
                			<th>Product Id</th>
                			<th>Name</th>
                			<th>Quantity</th>
                			<th>Price</th>
                		</tr>
                		</thead>
                        <tbody>
                		{this.props.location.state.cart.map((prods, keys) =>
                			<tr><td>{prods.id}</td>
                				<td>	{prods.name} </td>
                				<td>	{prods.quantity} </td>
                				<td>	{prods.price} </td>
                            </tr>
                			)}
                		</tbody>
                		</Table>
                		<Alert style={{width : '50%', marginLeft:'120px'}}>Your total amount is {this.total}</Alert>
                		<Alert style={{width : '50%', marginLeft:'120px'}} variant = "secondary">Your Wallet amount is {this.state.custObj.wallet}</Alert>
                		<Button style = {{marginLeft : '400px', marginBottom : '50px'}} variant="success"
                		onClick = {this.confirm}>Place the Orders</Button>
			</div>)
	}
}


export default OrderFinalization