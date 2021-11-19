import React from 'react';
import companyLogo from './veg.jpg'
import { useHistory } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCart';

//import './NavUser.css';

class NavBarUser extends React.Component{

	constructor(props){
		super(props);
    this.handleClickProfile=this.handleClickProfile.bind(this)
	}
	handleClickProfile(){

      this.props.history.push({pathname : "/customerdetails", state : {cust : this.props.userId}})

	}

	render(){
		return(
			 <div className = "app-header">
          		<div className = "header-items">
                <ShoppingCartOutlinedIcon style = {{margin : '8px', width : '85px'}}/>
            		<h4>Vegetable Management system</h4> 
          		</div>
          		<div className = "header-items-user">
          		  <Dropdown style = {{margin : '3px'}}>
                    <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                        {this.props.username}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick= {this.handleClickProfile}>My Profile</Dropdown.Item>

                        <Dropdown.Item onClick= {()=>this.props.history.push("/about")}>
                        Log Out</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
          		</div>
        	</div>
			);

	}
}
export default NavBarUser