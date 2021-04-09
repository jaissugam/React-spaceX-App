import React,{useState,useEffect} from 'react';
import Program from './program';
const LaunchYear=()=>{
    const [launches,setLaunches]=useState([]);
    const [year,setYear]=useState("2014");
    const getYear=e=>{
      setYear(e.target.value);
    }
    useEffect(()=>{
      const fetchItems=async()=>{
        const result=await fetch(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=${year}`);
        result
              .json()
              .then(result=>setLaunches(result));
    }
    fetchItems();
    })
    return (
      <div className="container">
        <label>Select a year:</label>
        <input type="year" value={year} onChange={getYear}></input>
        <Program launches={launches}/>
      </div>
    );
  }
  export default LaunchYear;