import React from "react";
import './style.css';

const ServiceOption =({updateService})=>{

        return(
            <div className="selectService">

                <label for="selectCab"><input type="radio" id="selectCab" name="typeOfService" value="cab"
                    onChange={updateService}/>Cab</label>

                <label for="selectHotel"><input type="radio" id="selectHotel" name="typeOfService"
                    onChange={updateService} value="hotel"/>Place to Stay</label>

                <label for="selectCab"><input type="radio" id="selectBoth" name="typeOfService"
                    onChange={updateService} value="both" />Both</label>
            </div>
        );


}

export default ServiceOption;
