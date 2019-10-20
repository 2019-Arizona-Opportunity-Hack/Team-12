import React from "react";
import './style.css';
import Gender from './chooseGender.js';
import Age from './chooseAge.js';
import ServiceOption from './ServiceOption.js'

const RequestForm = ({updateService, updateGender, changeHandler}) => {
    return(
        <div className="containerx">
            <form autocomplete="off">
                <div className="form-group">
                    <label>Pickup Location</label>
                    <input type="text" id="pickup"className="form-control"></input>
                </div>
                <div className="form-group">
                    <label>Nickname or Codeword</label>
                    <input type="text" id="userName" name="name" className="form-control"
                        onChange={changeHandler}/>
                </div>
                    <div className="form-group">
                        <label>Current Location</label>
                        <input type="text" id="currentLocation" name="address" className="form-control"
                            onChange={changeHandler}/>
                    </div>
                <div className="form-group">
                    <label>Destination</label>
                    <input type="text" id="destination" name="destination" className="form-control" />
                </div>
                <div className="form-row">
                <div className="form-group col-md-6">
                    <label>Gender</label>
                    <input type="radio" value="female" name="gender"
                        onChange={updateGender} />
                    <label for="female">Female</label>
                    <input type="radio" value="male" name="gender"
                        onChange={updateGender} />
                    <label for="male">Male</label>
                </div>
                <div className="form-group col-md-6">
                    <label id="labelage">Age</label>
                    <input type="number" name="age" min="0" max="100"
                        onChange={changeHandler}/>
                </div>
                </div>

                <div className="form-group">
                    <label>Are you traveling alone?</label>
                    <input type="radio" id="alone" name="numPeople"/>
                    <label for="alone">Yes</label>
                    <input type="radio" id="morePeople" name="numPeople" />
                    <label for="morePeople">No</label>
                </div>
                <div className="form-group">
                    <label id="sizelabel"> How many additional people will you be travelling with (not including yourself)</label>
                    <input type="number" name="numPeople" min="1" max="10"/>
                </div>
                <div className="form-group">
                    <label>Are you traveling with pets?</label>
                    <input type="radio" id="withPet" name="hasPets" />
                    <label for="withPet">Yes</label>
                    <input type="radio" id="withoutPet" name="hasPets" />
                    <label for="withoutPet">No</label>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                    <div>
                        <button type="Safety Exit" classname="btn btn-danger">Safety Exit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default RequestForm;
