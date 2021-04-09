import React,{useState,useEffect} from 'react';
import './App.css';
import Program from './components/program.js';
import {BrowserRouter as Router,Link, Route} from 'react-router-dom';
import SuccessLaunch from './components/SuccessLaunch';
import SuccessLanding from './components/SuccessLanding';
import LaunchYear from './components/LaunchYear';

function App() {
  const [launches,setLaunches]=useState([]);
  useEffect(()=>{
    const fetchItems=async()=>{
      const result=await fetch('https://api.spacexdata.com/v3/launches?limit=100');
      result
            .json()
            .then(result=>setLaunches(result));
  }
  fetchItems();
  })
  return (
    <div className="container">
      <Router>
      <Link to="/"><h2 className="container text-center" style={{color:'black'}}>SpaceX programs</h2></Link>
    
        <h3><span className="dropdown-item-text">Available filters</span></h3>
        
          <Link to="/successfulLaunch" className="dropdown-item" >Successful launch</Link>
          <Link to="/successfulLanding" className="dropdown-item" >Successful landing</Link>
          <Link to="/launchYear" className="dropdown-item" >Launch year</Link>
          <Route path="/" exact >
            <Program launches={launches}/>
          </Route>
          <Route path="/successfulLaunch" component={SuccessLaunch}></Route>
          <Route path="/successfulLanding" component={SuccessLanding}></Route>
          <Route path="/launchYear" component={LaunchYear}></Route>
        </Router>
      
    </div>
  );
}

export default App;
