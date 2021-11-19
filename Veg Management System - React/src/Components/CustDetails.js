import React from 'react';
import NavBarAdmin from './NavBarAdmin';
import CustProfile from './CustProfile'
import CustOrderHistory from './CustOrderHistory'
import TabContainer from 'react-bootstrap/TabContainer'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
class CustDetails extends React.Component{

	constructor(props){
		super(props)

	}

	

	render(){
		return(
			<div>
				<NavBarAdmin username = "Admin" userid = {1}/>
				<div className = "cust-profile-tab">
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
		      		</Nav>
				</Col>
				    <Col sm={9}>
				      <Tab.Content>
				        <Tab.Pane eventKey="first">
				          <CustProfile custId = {this.props.location.state.cust}/>
				        </Tab.Pane>
				        <Tab.Pane eventKey="second">
				        	<CustOrderHistory custId = {this.props.location.state.cust}/>
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

export default CustDetails