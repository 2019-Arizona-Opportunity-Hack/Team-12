import React from "react";

class chooseAge extends React.Component{
    constructor(props){
        super(props);
        this.state = {age:''};
    }

    changeHandler = (event) => {
        this.setState({age: event.target.value});
    }
    render(){
        const {age} = this.state;
        return(
            <div>
                <label>Age</label>
                <input type="number" name="age" min="0" max="100"
                    onChange={this.changeHandler}/>
            </div>
        );

    }
}

export default chooseAge;
