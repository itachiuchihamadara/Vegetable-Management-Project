import './App.css';
import React from 'react'
import NavBar from './Components/NavBar';
import About from './Components/About';
import 'bootstrap/dist/css/bootstrap.min.css'
function App (props){
	function componentDidMount(){
		window.localstorage.setItem("user", "null")
	}
  return (
    <div className="App">
        <NavBar/>
        <About/>
    </div>
  );
}

export default App;
