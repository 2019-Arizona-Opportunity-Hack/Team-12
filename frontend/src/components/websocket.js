import io from 'socket.io-client';
import React from 'react';
import axios from 'axios';

let socket = io('http://localhost:3001/');

export default class WebsocketHandler extends React.Component{
    constructor(){
        super();
        this.state = {
            hotels:[],
            cabs:[],
            hotelBestValues: {},
            globalBestValues: {},
            hotelLocation: '',
            dummy:'',
        }

        this.handleHotelChange = this.handleHotelChange.bind(this);
        this.handleExitHotel = this.handleExitHotel.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleTime = this.handleTime.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateValues = this.updateValues.bind(this);
        this.updateActiveUsers = this.updateActiveUsers.bind(this);
        this.handleLowestHotelUpdate = this.handleLowestHotelUpdate.bind(this);
    }

    componentDidMount(){
        
        this.updateActiveUsers();

        socket.on('updateValues', this.updateValues);
        //socket.on('timer',this.handleTime);
        socket.on('exitHotel',this.handleExitHotel);
        socket.on('lowestHotelPriceUpdate',this.handleLowestHotelUpdate);
        
        socket.on('updateHotelPage',this.updateActiveUsers);
    }


    updateActiveUsers(){
        axios.get('http://localhost:3001/person/').then(res=>{
            let intercept = res.data.filter((value)=>{
                return value.needsHotel;
            });
            
            let name= res.data.address;
           
            let fixedData = {}
            

            for(let person of intercept){
                fixedData[person.address] = '';
                
            }

            this.setState({hotels:intercept,hotelBestValues:fixedData});
        }).then((data)=>{
            console.log(this.state.hotelBestValues);
        });
    }

    updateValues(data){
        console.log('i got the values!', data);

        this.setState({globalBestValues:data});

        console.log('state',this.state.globalBestValues);
    }

    handleExitHotel(data){
        let gonePerson = {};

        for(let person of this.state.hotels){
            if(person.address == data){
                gonePerson = person; 
            }
        }

        gonePerson[['destination']] = this.state.hotelLocation;
        gonePerson[['status']] = 'nCab';
        gonePerson[['needsHotel']] = false;
        console.log(gonePerson._id);
        let id = String(gonePerson._id);
        axios({
            method: 'post',
            url: `http://localhost:3001/person/prepare`,
            params:{
                id,
            },
            data:gonePerson,
        }).then((data)=>{
            //this.updateActiveUsers();
            socket.emit('globalHotelStatusUpdate',gonePerson.address);
        })

        //this.setState({dummy:''});

        

    }

    handleHotelChange(e){
        this.setState({hotelLocation:e.target.value});
    }

    handleTime(data){
        console.log(data);
    }

    handleLowestHotelUpdate(data){
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
        let temp = this.state.hotelBestValues;
        //console.log();
        temp[e.target.name] = e.target.value;
        this.setState({hotelBestValues:temp})

        
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state.hotelBestValues[e.target.name])
        socket.emit('hotelPriceChange',`${socket.id},${e.target.name},${this.state.hotelBestValues[e.target.name]}`)
    }

    render(){
        var pStyles = {
            display:'inline-block',
            paddingLeft:'2%',
        }

        var divStyle = {
            border: '2px solid',
        }

        
        let personInNeed = this.state.hotels.map((val,index)=>{
            let uniqueRoom = val.id;
            let yourPrice = this.state.hotelBestValues[val.address];
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

                    
                    <form onSubmit={this.handleSubmit} name={val.address}>
                        <label>Input your price: </label>
                        <input name={val.address} value={this.state.hotelBestValues[val.address]} onChange={this.handleChange}/>
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
            <label>Hotel Address: </label>
            <input name='hotelAddy' value={this.state.hotelLocation} onChange={this.handleHotelChange}/>
            {list}
        </div>

        let showRoom = this.props.room == 'Hotel' ? holder : null;

        return <div>
            {showRoom}

        </div>
    }

}




        
        


    
    
