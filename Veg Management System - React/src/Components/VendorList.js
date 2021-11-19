import React from 'react';
import Card from 'react-bootstrap/Card'
import {Button} from 'react-bootstrap'
class VendorList extends React.Component{

	constructor(props){
		super(props)
		this.state = {Vegetables : []}
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(){

			this.props.history.push
				({pathname : "/vegetables", state : {venId : this.props.venObj.id, 
					userId : this.props.userId, userName : this.props.userName}})
	}

	render(){

		return(
			<Card className = "Vendor-Container" style={{ width: '18rem' }}>
  				<Card.Body>
    			<Card.Title>{this.props.venObj.name}</Card.Title>
    			<Card.Subtitle className="mb-2 text-muted">{this.props.venObj.address}</Card.Subtitle>
    			<Card.Text>
    			{this.props.venObj.description}
    			</Card.Text>
        		<Button variant = "outline-success" onClick = {this.handleClick} size = "sm">View available Vegetables</Button>
  				</Card.Body>
  				<Card.Footer className="text-muted">  {this.props.venObj.phn}
  			    </Card.Footer>
			</Card>
			)
	}


}

export default VendorList