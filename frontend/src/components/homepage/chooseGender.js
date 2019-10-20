import React from "react";

class chooseGender extends React.Component{
    constructor(props){
        super(props);
        this.state = {gender:''};
    }

    updateGender = (event) => {
        this.setState({gender: event.target.value});
    }
    render(){
        const {gender} = this.state;
        return(
            <div className="field">
                <label>Gender</label>
                <input type="radio" value="female" name="gender"
                    onChange={this.updateGender} checked={'female' === gender} />
                <label for="female">Female</label>
                <input type="radio" value="male" name="gender"
                    onChange={this.updateGender} checked={'male' === gender}/>
                <label for="male">Male</label>
            </div>
        );

    }
}

export default chooseGender;
