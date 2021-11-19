import React from 'react';
import NavBarAdmin from './NavBarAdmin';
import ManageCustomers from './ManageCustomers'
import ManageVendors from './ManageVendors'
import {Button} from 'react-bootstrap'
import TabContainer from 'react-bootstrap/TabContainer'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
class AdminDashboard extends React.Component{

		constructor(props){
			super(props)

			this.manageVendors = this.manageVendors.bind(this)
			this.manageCust = this.manageCust.bind(this)
		}
		manageCust(){
			this.props.history.push("/manageCust")
		}
		manageVendors(){

			this.props.history.push("/manageVendors")
		}

		render(){

			return(
				<div className = "admin-dash-root">
					<NavBarAdmin username = "Admin" userid = {1} history = {this.props.history}/>
					<div className = "admin-action-buttons" style = {{position : 'relative', left : '10px'
						,top : '100px'

						}}>
						<TabContainer id="left-tabs-example" defaultActiveKey="first">
  							<Row>
    						<Col sm={3}>
      						<Nav variant="pills" className="flex-column">
        					<Nav.Item>
          						<Nav.Link eventKey="first">Report</Nav.Link>
        					</Nav.Item>
					        <Nav.Item>
					          <Nav.Link eventKey="second">Manage Customers</Nav.Link>
					        </Nav.Item>
					        <Nav.Item>
					          <Nav.Link eventKey="third">Manage Vendors</Nav.Link>
					        </Nav.Item>
					        
					      </Nav>
    						</Col>
							    <Col sm={9}>
							      <Tab.Content>
							        <Tab.Pane eventKey="first">
							        	<h3>Following are reports</h3>  
							        </Tab.Pane>
							        <Tab.Pane eventKey="second">
							          <ManageCustomers history = {this.props.history}
							           username = "Admin"/>
							        </Tab.Pane>
							        <Tab.Pane eventKey="third">
							  		   <ManageVendors history = {this.props.history}
							  		   username = "Admin"/>        
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

export default AdminDashboard