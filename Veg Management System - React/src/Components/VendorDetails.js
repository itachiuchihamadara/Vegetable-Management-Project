import React from 'react';
import NavBarAdmin from './NavBarAdmin';
import TabContainer from 'react-bootstrap/TabContainer'
import VendorProfile from './VendorProfile';
import VendorOrderHistory from './VendorOrderHistory';
import VendorVegAdminList from './VendorVegAdminList';
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
class VendorDetails extends React.Component{

	constructor(props){
		super(props)

	}

	

	render(){
		return(
			<div>
				<NavBarAdmin username = "Admin" userid = {1}/>
				<div className = "ven-profile-tab">
				<TabContainer id="left-tabs-example" defaultActiveKey="first">
					<Row>
					<Col sm={3}>
					<Nav variant="pills" className="flex-column">
						<Nav.Item>
						<Nav.Link eventKey="first">Profile</Nav.Link>
						</Nav.Item>
		        		<Nav.Item>
		          		<Nav.Link eventKey="second">Order History</Nav.Link>
		        		</Nav.Item>
		        		<Nav.Item>
		          		<Nav.Link eventKey="third">Available Vegetables</Nav.Link>
		        		</Nav.Item>
		      		</Nav>
				</Col>
				    <Col sm={9}>
				      <Tab.Content>
				        <Tab.Pane eventKey="first">
				    		<VendorProfile venId = {this.props.location.state.venId} 
				    		history={this.props.history} />   
				        </Tab.Pane>
				        <Tab.Pane eventKey="second">
				        	<VendorOrderHistory venId={this.props.location.state.venId}/>
				        </Tab.Pane>
				        <Tab.Pane eventKey="third">
				        	<VendorVegAdminList venId={this.props.location.state.venId}/>
				        </Tab.Pane>
				      </Tab.Content>
				    </Col>
				  </Row>
				</TabContainer>
				</div>		
			</div>

			);
	}

}

export default VendorDetails



