import React from 'react';
import NavBarAdmin  from './NavBarAdmin'
import VendorService from '../Service/VendorService'
import {Table} from 'react-bootstrap';
import {Button} from 'react-bootstrap'
class VegReg extends React.Component{

	constructor(props){
		super(props)
		this.state = {venObj : {}, vegList : []}
		this.addVeg = this.addVeg.bind(this)
		this.count = 1
	}

	componentDidMount(){
		VendorService.getVendorById(this.props.location.state.venId).
		then(response=>this.setState({venObj : response.data}))
		VendorService.allVegs().then(response=>this.setState({vegList : response.data}))
	}

	addVeg(){
			var veg = {id : this.state.vegList.length+this.count, name : document.getElementById("names").value,
			price : document.getElementById("price").value }
			VendorService.addVeg(veg)
			alert("Added Successfully")
			VendorService.addVegVen({vegetable : veg, vendor : this.state.venObj})
			this.count += 1
	}

	render(){
		return(<div>
			<NavBarAdmin username = "Vendor Admin"/>
			<h4 style = {{margin : '20px'}}>Add new Vegtable</h4>
			<Table className="veg-reg" style = {{width : '50%', margin : '120px'}}>
			<thead>
			<tr>
			<td>Property</td>
			<td>Value</td>
			</tr>
			</thead>
			<tbody>
			<tr>
			<td>Name of the vegetable</td>
			<td><input id = "names" style = {{width : '100%'}}/></td>
			</tr>
			<tr>
			<td>Price of the vegetable</td>
			<td><input id = "price" style = {{width : '100%'}}/></td>
			</tr>
			</tbody>
			</Table>
			<Button style ={{marginLeft : "120px"}} 
			 onClick = {this.addVeg}>Add</Button>
			</div>);
	}

}


export default VegReg