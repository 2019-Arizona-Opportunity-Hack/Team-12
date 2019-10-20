import React from "react";
import './style.css';
import CabLogo from './cab.png';
import HotelLogo from './room.png';
import Both from './both.png';

const ServiceOption =({updateService})=>{

        return(
            <div className="selectService">

                <label  htmlFor="selectCab">
                <input type="radio" id="selectCab" name="typeOfService" value="cab"
                    onChange={updateService}/>
                    <img src={CabLogo} alt="cab icon" width="100px"/>
                    <div>Ride</div>
                </label>

                <label  htmlFor="selectHotel">
                    <input type="radio" id="selectHotel" name="typeOfService"
                    onChange={updateService} value="hotel"/>
                    <img src={HotelLogo} alt="hotel icon" width="100px"/>
                    <div>Roof</div>
                </label>

                <label  htmlFor="selectBoth">
                    <input type="radio" id="selectBoth" name="typeOfService"
                    onChange={updateService} value="both" />
                    <img src={Both} alt="hotel and cab icon" width="100px"/>
                    <div>Both</div>
                </label>

            </div>
        );


}

export default ServiceOption;
