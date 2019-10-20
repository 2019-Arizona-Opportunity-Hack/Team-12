import React from "react";
import './style.css';

const userLocation =({serviceOption})=>{
    console.log(serviceOption === "cab");

    if (serviceOption === "cab"){
        return(
            <div>
                <div className="form-group">
                    <label>Pickup Location</label>
                    <input type="text" id="pickup"className="form-control"></input>
                </div>
                <div className="form-group">
                    <label>Destination</label>
                    <input type="text" id="destination" name="destination" className="form-control" />
                </div>
            </div>
        )
    }
    else{
        return(
            <div className="form-group">
                <label>Current Location</label>
                <input type="text" id="pickup"className="form-control"></input>
            </div>
        )
    }


}


export default userLocation;
