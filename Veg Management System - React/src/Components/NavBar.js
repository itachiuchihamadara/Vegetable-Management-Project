import React from 'react';
import companyLogo from './veg.jpg'
import { useHistory } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCart';


function NavBar(props){
    
  const history = useHistory()
  
  function handleclickUser(props){
    history.push({pathname:'/login'});
  }

  function handleclickAdmin(props){
    history.push({pathname:'/loginAdmin'});
  }

  function handleclickVendor(props){
    history.push({pathname:'/loginvendor'});
  }
  function register(props){
    history.push({pathname : "/custRegistration"})
  }
    return(
        <div className = "app-header">
          <div className = "header-items">
            <ShoppingCartOutlinedIcon style = {{margin : '8px', width : '85px'}}/>
            <h4>Vegetable Management system</h4> 
          </div>
          <div className = "header-items-about">
            <Button variant = "Dark" style = {{fontSize : '18px'}} onClick={register}><b>Sign Up</b></Button>
            <Dropdown style = {{marginTop : '3px', marginLeft : '25x'}}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Login
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick = {handleclickUser}>User Login</Dropdown.Item>
                  <Dropdown.Item onClick = {handleclickVendor} >Vendor Login</Dropdown.Item>
                  <Dropdown.Item onClick = {handleclickAdmin}>Admin Login</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
    );
}

export default NavBar