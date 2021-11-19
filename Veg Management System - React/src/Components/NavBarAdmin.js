import React from 'react';
import companyLogo from './veg.jpg'
import { useHistory } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCart';
import Dropdown from 'react-bootstrap/Dropdown'

class NavBarAdmin extends React.Component{

	constructor(props){
		super(props);
	}
	render(){
		return(
			 <div className = "app-header">
          		<div className = "header-items">
                <ShoppingCartOutlinedIcon style = {{margin : '8px', width : '85px'}}/>
            		<h4>Vegetable Management system</h4> 
          		</div>
          		<Dropdown style = {{marginTop : '3px', marginLeft : '25x'}}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {this.props.username}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick = {()=>this.props.history.push("/about")}>Log Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
        	</div>
			);

	}
}

export default NavBarAdmin