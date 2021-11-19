import React from 'react';
import VendorService from '../Service/VendorService';
import NavBarUser from './NavBarUser.js';
import Card from 'react-bootstrap/Card'
import {Button} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import veglogo from './veg.jpg'
class ManageVegetables extends React.Component{
	constructor(props){
		super(props);
		this.state = {Vegetables : []}
		this.addVeg = this.addVeg.bind(this)

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
	
	confirm(id){

		if (window.confirm('Are you sure you want to delete?')) {
  
  			this.removeVeg(id)
		} else {
  				console.log("whoops")
			}

}
	removeVeg(id){

		VendorService.delVegVen(id)
		alert("Successfully deleted")

	}

	addVeg(){

		this.props.history.push({pathname : "/addVeg", state : {venId : this.props.venId}})

	}

	render(){
		return(
			<div>	
					<Button onClick = {this.addVeg} style = {{marginLeft: "110px"}}>Add new Vegetable</Button>
            		<div className = "veg-and-cart">
                	<div className="vegetable-container">
                	{this.state.Vegetables.map((vegs, keys) => 
                		<Card className = "vegetables" onMouseEnter = {()=>this.mouseEnter(keys)}
                		onMouseLeave = {()=>this.mouseLeaves(keys)}>
                        <Card.Body>
                            <Card.Img variant = "top" src = {veglogo} style ={{height:'120px'}}/>
                			<Card.Title>{vegs.vegetable.name} </Card.Title>
                			<Card.Subtitle>Price : {vegs.vegetable.price}</Card.Subtitle>
                			<Button size = "sm" onClick = {()=>this.confirm(vegs.id)} 
                			style ={{marginTop:'30px'}}>Remove</Button>
                		</Card.Body>
                		</Card>
                	 )}
                	</div>
                	</div>
			</div>
			);
	}

}

export default ManageVegetables