import React from "react";
import './style.css';

const ServiceOption =({updateService})=>{

        return(
            <div className="selectService">

                <label  htmlFor="selectCab"><input type="radio" id="selectCab" name="typeOfService" value="cab"
                    onChange={updateService}/>Ride</label>

                <label  htmlFor="selectHotel"><input type="radio" id="selectHotel" name="typeOfService"
                    onChange={updateService} value="hotel"/>Roof</label>

                <label  htmlFor="selectCab"><input type="radio" id="selectBoth" name="typeOfService"
                    onChange={updateService} value="both" />Both</label>

            </div>
        );


}

export default ServiceOption;
