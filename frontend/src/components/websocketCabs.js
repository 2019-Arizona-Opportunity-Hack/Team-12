import io from 'socket.io-client';
import React from 'react';
import axios from 'axios';

let socket = io('http://localhost:3001/');

export default class WebsocketHandler extends React.Component{
    constructor(){
        super();
        this.state = {
            cabs:[],
            cabBestValues: {},
            globalBestValues: {},
            
        }

        this.handleCabChange = this.handleCabChange.bind(this);
        this.handleExitCab = this.handleExitCab.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleTime = this.handleTime.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateValues = this.updateValues.bind(this);
        this.updateActiveUsers = this.updateActiveUsers.bind(this);
        this.handleLowestCabUpdate = this.handleLowestCabUpdate.bind(this);
    }

    componentDidMount(){
        /*axios.get('http://localhost:3001/person/').then(res=>{
            let intercept = res.data.filter((value)=>{
                return (value.needsHotel==false);
            });
            
            let name= res.data.address;
           
            let fixedData = {}
            

            for(let person of intercept){
                fixedData[person.address] = '';
                
            }

            this.setState({cabs:intercept,cabBestValues:fixedData});
        }).then((data)=>{
            console.log(this.state.cabs);
        });*/

        this.updateActiveUsers();

        socket.on('updateCabValues', this.updateValues);
        //socket.on('timer',this.handleTime);
        socket.on('exitCab',this.handleExitCab);
        socket.on('lowestCabPriceUpdate',this.handleLowestCabUpdate);
    
        socket.on('updateCabPage',this.updateActiveUsers);
    }

    updateActiveUsers(){
        axios.get('http://localhost:3001/person/').then(res=>{
            let intercept = res.data.filter((value)=>{
                if(value.needsHotel == false){
                    if(value.needsCab == true){
                        return true;
                    }
                }
                return false
            });
            
            let name= res.data.address;
           
            let fixedData = {}
            

            for(let person of intercept){
                fixedData[person.address] = '';
                
            }

            this.setState({cabs:intercept,cabBestValues:fixedData});
        }).then((data)=>{
            console.log(this.state.cabBestValues);
        });
    }

    updateValues(data){
        console.log('i got the values!', data);

        this.setState({globalBestValues:data});

        console.log('state',this.state.globalBestValues);
    }

    handleExitCab(data){
        let gonePerson = {};

        for(let person of this.state.cabs){
            if(person.address == data){
                gonePerson = person; 
            }
        }

        //gonePerson[['destination']] = this.state.hotelLocation;
        gonePerson[['status']] = 'complete';
        gonePerson[['needsCab']] = false;
        console.log(gonePerson._id);
        let id = String(gonePerson._id);
        axios({
            method: 'post',
            url: `http://localhost:3001/person/cabUpdate/`,
            params:{
                id,
            },
            data:gonePerson,
        }).then((data)=>{
            //this.updateActiveUsers();
            socket.emit('globalCabStatusUpdate',gonePerson.address);
        })


    }

    handleCabChange(e){
        this.setState({hotelLocation:e.target.value});
    }

    handleTime(data){
        console.log(data);
    }

    handleLowestCabUpdate(data){
        let usableData = data.split(',');
        let name=usableData[0];
        let price=usableData[1];
        let temp = this.state.globalBestValues;
        temp[name]=price;
        this.setState({globalBestValues:temp});

        console.log('lo',this.state.globalBestValues);
    }

    handleChange(e){
        console.log(e.target.name);
        let temp = this.state.cabBestValues;
        //console.log();
        temp[e.target.name] = e.target.value;
        this.setState({cabBestValues:temp})

        
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state.cabBestValues[e.target.name])
        socket.emit('cabPriceChange',`${socket.id},${e.target.name},${this.state.cabBestValues[e.target.name]}`)
    }

    render(){
        var pStyles = {
            display:'inline-block',
            paddingLeft:'2%',
        }

        var divStyle = {
            border: '2px solid',
        }

        
        let personInNeed = this.state.cabs.map((val,index)=>{
           
            let yourPrice = this.state.cabBestValues[val.address];
            //console.log(yourPrice)
            //socket.emit('hotelPriceChange', `${val.address},${socket.id}`);

            let hasPets = val.lodgingRequirements.numPets > 0 ? 'has pets' : 'no pets';
            
            //console.log(this.state.globalBestValues[val.address]);
            let hasRealLowestPrice = this.state.globalBestValues[val.address] >= 999 ? 'none': this.state.globalBestValues[val.address];


            return (<li  key={index}>
                <div style={divStyle}>
                    <p style={pStyles}>{`codename: ${val.safeWord}`}</p>
                    <p style={pStyles}>{`Address: ${val.address}`}</p>
                    <p style={pStyles}>{`Number of people: ${val.lodgingRequirements.numPeople}`}</p>
                    <p style={pStyles}>{hasPets}</p>
                    <br/>
                    <p style={pStyles}>From: {val.address}</p>
                    <p style={pStyles}>To: {val.destination}</p>
                    
                    <form onSubmit={this.handleSubmit} name={val.address}>
                        <label>Input your price: </label>
                        <input name={val.address} value={this.state.cabBestValues[val.address]} onChange={this.handleChange}/>
                        <button >Submit offer</button>
                    </form>

                    <br/>
                    <p style={pStyles}>Your price: ${yourPrice}</p>
                    <br/>
                    <p style={pStyles}>Best price: ${hasRealLowestPrice}</p>
                </div>
            </li>)
        })

        
        let list = <ul key='dumb'>{personInNeed}</ul>

        let holder = <div>
            <label>Cab address: </label>
            <input name='hotelAddy' value={this.state.hotelLocation} onChange={this.handleCabChange}/>
            {list}
        </div>

        let showRoom = this.props.room == 'Cabs' ? holder : null;

        return <div>
            {showRoom}

        </div>
    }

}




        
        


    
    
