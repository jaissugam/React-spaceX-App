import React from 'react';
import '../App.css';
const Program=({launches})=>{
    
    return (
        <ul className="cards">
            {launches.map(launch=>(
                <div className='card' key={launch.flight_number}>
                <div className='card-inner'>
                  
                  <div className='card-front'>
                    <h1>{launch.mission_name}</h1>
                    <ul>
            
                      <li>
                        <strong>Launch Site:{launch.launch_site.site_name_long}</strong> 
                      </li>
                      <li>
                        <strong>Launch Unix Date:{launch.launch_date_unix}</strong> 
                      </li>
                      <li>
                        <strong>Launch Year:{launch.launch_year}</strong> 
                      </li>
                      <li>
                        <strong>Rocket:{launch.rocket.rocket_name}</strong> 
                      </li>
                      
                    </ul>
                  </div>
                  <div className='card-back' style={{backgroundColor:'lightblue'}}>
                    <h3>{launch.mission_name}</h3>
                    <h4>{launch.launch_date_local}</h4>
                    <h4>Rocket Id: {launch.rocket.rocket_id}</h4>
                    <h4>Rocket Type: {launch.rocket.rocket_type}</h4>
                  </div>
                </div>
              </div>
            )
            )};
        </ul>
    )
}
export default Program;