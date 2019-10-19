import React from "react";

class ServiceOption extends React.Component{
    constructor(props){
        super(props);
        this.state = {serviceOption:'FUdge'};
    }

    updateService = (event) => {
        this.setState({serviceOption: event.target.value});
    }

    render(){
        console.log("ServiceOption:" + this.state.serviceOption);

        return(
            <div className="container">
                <input type="radio" id="selectCab" name="typeOfService" value="cab"
                    onChange={this.updateService} checked={'cab' === this.state.serviceOption}/>
                <label for="selectCab">Cab</label>
                <input type="radio" id="selectHotel" name="typeOfService"
                    onChange={this.updateService} value="hotel" checked={'hotel' === this.state.serviceOption} />
                <label for="selectHotel">Place to Stay</label>
                <input type="radio" id="selectBoth" name="typeOfService"
                    onChange={this.updateService} value="both" checked={'both' === this.state.serviceOption} />
                <label for="selectCab">Both</label>
                { console.log(this.state.serviceOption) }
            </div>
        );
    }

}

export default ServiceOption;
