import React from "react";
import axios from "axios";

//new stuff
import WebsocketHandler from "../websocket";


export default class App extends React.Component{
    /*constructor(){
        super();

        this.state = {
            peopleInNeed:[],
            bestPrice: Infinity,
        }
    }

    componentDidMount(){
        console.log('adf');
        axios.get('http://localhost:3001/person').then(res=>{
            console.log(res);
            this.setState({peopleInNeed:res.data});
        })
    }

    calculateBestPrice(){

    }

    render(){
        var pStyles = {
            display:'inline-block',
            paddingLeft:'2%',
        }

        var divStyle = {
            border: '2px solid',
        }

        console.log(this.state.peopleInNeed);
        let personInNeed = this.state.peopleInNeed.map((val)=>{
            let hasPets = val.lodgingRequirements.numPets > 0 ? 'has pets' : 'no pets';
            let hasRealLowestPrice = val.bestHotelPrice >= 999 ? 'none': '56';
            return (<li  key={val.safeWord}>
                <div style={divStyle}>
                    <p style={pStyles}>{`codename: ${val.safeWord}`}</p>
                    <p style={pStyles}>{`Address: ${val.address}`}</p>
                    <p style={pStyles}>{`Number of people: ${val.lodgingRequirements.numPeople}`}</p>
                    <p style={pStyles}>{hasPets}</p>

                    <form>
                        <label>Input your price:  </label>
                        <input name='bPrice'/>
                        <button>Submit offer</button>
                    </form>

                    <br/>
                    <p style={pStyles}>Your price: $</p>
                    <br/>
                    <p style={pStyles}>Best price: ${hasRealLowestPrice}</p>
                </div>
            </li>)
        })

        return (
            <div>
                Input your address:
                <ul>
                    {personInNeed}
                </ul>
            </div>
        )
    }*/

    constructor(){
        super();

        this.state = {
            currentlyNeedsHotelRoom:[],
        }

        this.giveHotels = this.giveHotels.bind(this);
    }

    componentDidMount(){
        
    }

    giveHotels(data){
        this.setState({currentlyNeedsHotelRoom:data})
    }


    render(){
        console.log(this.state.currentlyNeedsHotelRoom)
        return (<div>
            <WebsocketHandler room="Hotel" />
        </div>)
    }
}


