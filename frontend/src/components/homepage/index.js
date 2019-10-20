import React from "react";
import ServiceOption from './ServiceOption';
import RequestForm from './RequestForm';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            serviceOption:'',
            name:'',
            address:'',
            gender:'',
            age:0,
            numPeople:1,
            hasPets:'',
            numPets:0
        }
    }
        updateService = (event) => {
            this.setState({serviceOption: event.target.value});
        }
        updateGender = (event) => {
            this.setState({gender: event.target.value});
        }
        changeHandler = (event) => {
            let name = event.target.name;
            let val = event.target.value;
            this.setState({[name]:val});
        }

    render(){

        const {serviceOption, name, address, gender, age, numPeople, numPets} = this.state;
        console.log(serviceOption);
        console.log(this.state);


        return !serviceOption ?
            <div>
                <h1>Request a service</h1>
                <ServiceOption
                    updateService={this.updateService}/>
            </div> :
            <div>
                <h1>Request a service</h1>
                <ServiceOption
                    updateService={this.updateService}/>
                <RequestForm
                    updateService={this.updateService}
                    changeHandler={this.changeHandler}
                    updateGender={this.updateGender}
                    serviceOption={this.state.serviceOption}/>
            </div>
    }

}

export default App;
