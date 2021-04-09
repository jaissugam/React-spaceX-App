import React,{useState,useEffect} from 'react';
import Program from './program';

const SuccessLaunch=()=>{
    const [launches,setLaunches]=useState([]);
    useEffect(()=>{
      const fetchItems=async()=>{
        const result=await fetch('https://api.spacexdata.com/v3/launches?limit=100&launch_success=true');
        result
              .json()
              .then(result=>setLaunches(result));
    }
    fetchItems();
    })
    return (
      <Program launches={launches}/>
    );
  }
  export default SuccessLaunch;