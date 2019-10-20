import React from "react";
import axios from 'axios';

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

        this.handleSubmit = this.handleSubmit.bind(this);
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

        handleSubmit(e){
            console.log("adf");
            e.preventDefault();
            const upload = {
                gender: this.state.gender,
                address: this.state.address,
                destination:'',
                safeWord: this.state.name,
                age:this.state.age,
                lodgingRequirements:{
                    hasPets:this.state.hasPets,
                    numPets:this.state.numPets,
                    numPeople:this.state.numPeople,
                    needsHotel:true,
                },
                allCabPrices:{},
                allHotelPrices:{},
                bestHotelPrice:999,
                bestCabPrice:999,
                needsHotel:true,
                needsCab:true,
                status:'incomplete',
            }

            axios.post('http://localhost:3001/person',upload)
            .then(res => {
                console.log(res);
                console.log(res.data);
              })

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
