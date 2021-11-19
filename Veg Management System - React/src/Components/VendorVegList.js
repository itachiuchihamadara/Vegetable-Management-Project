import React from 'react';
import VendorService from '../Service/VendorService';
import OrderService from '../Service/OrderService';
import NavBarUser from './NavBarUser.js';
import Card from 'react-bootstrap/Card'
import {Button} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import veglogo from './veg.jpg'

class VendorVegList extends React.Component{
	constructor(props){
		super(props);
		this.state = {Vegetables : [], Cart : []}
        this.removeItem = this.removeItem.bind(this)
        this.makeorder=this.makeorder.bind(this)
	}
	componentDidMount(){

			VendorService.getVegetablesByVendor(this.props.location.state.venId).then((response)=>{
				this.setState({Vegetables : response.data})
			})
	}
	mouseEnter(keys){
		document.getElementsByClassName("vegetables")[keys].style.backgroundColor = "#3c4040"
		document.getElementsByClassName("vegetables")[keys].style.color = "white"
	}
	mouseLeaves(keys){
		document.getElementsByClassName("vegetables")[keys].style.backgroundColor = "white"
		document.getElementsByClassName("vegetables")[keys].style.color = "black"
	}
    removeItem(prods){
            var arr = [...this.state.Cart]
            var id = arr.indexOf(prods)
            arr.splice(id, 1)
            this.setState({Cart:arr})
    }

    makeorder(){

        this.props.history.push({pathname : "finalizeorder",
            state : {cart : this.state.Cart, venId : this.props.location.state.venId,
                custId : this.props.location.state.userId}
            })


    }


    

	render(){
		return(
			<div>
            	<NavBarUser username = {this.props.location.state.userName} userId = {this.props.location.state.userId}
                history={this.props.history}/>
                	<div className = "veg-and-cart">
                	<div className="vegetable-container">
                	{this.state.Vegetables.map((vegs, keys) => 
                		<Card className = "vegetables" onMouseEnter = {()=>this.mouseEnter(keys)}
                		onMouseLeave = {()=>this.mouseLeaves(keys)}>
                        <Card.Body>

                            <Card.Img variant = "top" src = {veglogo} style ={{height:'120px'}}/>
                			<Card.Title>{vegs.vegetable.name} </Card.Title>
                			<Card.Subtitle>Price : {vegs.vegetable.price}</Card.Subtitle>
                			<Card.Text>
                                Quantity:
                			     <div className = "choose-qty" >
                                    <input id= {keys} type="number" min = "1"/>
                			     </div>
                            </Card.Text>
                			<Button variant = "outline-success"
                					onClick={()=>this.setState({Cart:
                					[...this.state.Cart, {id : vegs.vegetable.id,name: vegs.vegetable.name, 
                					price : vegs.vegetable.price,
                					quantity : document.getElementById(keys).value }]})}>
                			Add to cart</Button>
                            </Card.Body>
                		</Card>
                	 )}
                	</div>
                	<div className = "cart-box" >
                		<h2>Cart Items:</h2>
                		<Table striped bordered hover>
                		<thead><tr>
                            <th>Product Id</th>
                			<th>Name</th>
                			<th>Quantity</th>
                			<th>Price</th>
                		</tr>
                		</thead>
                        <tbody>
                		{this.state.Cart.map((prods, keys) =>
                			<tr>
                                <td> {prods.id} </td>
                				<td>	{prods.name} </td>
                				<td>	{prods.quantity} </td>
                				<td>	{prods.price} </td>
                                <Button variant = "link" style ={{textDecoration : 'none'}} onClick = 
                            {()=> this.removeItem(prods) }> Remove </Button>
                			
                            </tr>
                			)}
                		</tbody>
                		</Table>
                        <Button variant="dark" size = "sm" onClick = {this.makeorder}>
                        Proceed to pay</Button>
                	</div>
                	</div>
			</div>
			);
	}

}

export default VendorVegList