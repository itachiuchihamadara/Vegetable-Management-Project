import React from 'react';
import VendorService from '../Service/VendorService';
import NavBarUser from './NavBarUser.js';
import Card from 'react-bootstrap/Card'
import {Button} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import veglogo from './veg.jpg'
class VendorVegAdminList extends React.Component{
	constructor(props){
		super(props);
		this.state = {Vegetables : []}

	}
	componentDidMount(){

			VendorService.getVegetablesByVendor(this.props.venId).then((response)=>{
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


	render(){
		return(
			<div>
            		<div className = "veg-and-cart">
                	<div className="vegetable-container">
                	{this.state.Vegetables.map((vegs, keys) => 
                		<Card className = "vegetables" onMouseEnter = {()=>this.mouseEnter(keys)}
                		onMouseLeave = {()=>this.mouseLeaves(keys)}>
                        <Card.Body>
                            <Card.Img variant = "top" src = {veglogo} style ={{height:'120px'}}/>
                			<Card.Title>{vegs.vegetable.name} </Card.Title>
                			<Card.Subtitle>Price : {vegs.vegetable.price}</Card.Subtitle>
                			</Card.Body>
                		</Card>
                	 )}
                	</div>
                	</div>
			</div>
			);
	}

}

export default VendorVegAdminList