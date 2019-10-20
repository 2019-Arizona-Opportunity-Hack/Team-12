import React from "react";
import './style.css';
import Gender from './chooseGender.js';
import Age from './chooseAge.js';
import ServiceOption from './ServiceOption.js'

const RequestForm = ({updateService, updateGender, changeHandler}) => {
    return(
        <div className="container">
            <form autocomplete="off">
                <div className="field">
                    <label>Name </label>
                    <input type="text" id="userName" name="name"
                        onChange={changeHandler}/>
                </div>
                <div className="field">
                    <label>Address</label>
                    <input type="text" id="currentLocation" name="address"
                        onChange={changeHandler}/>
                </div>
                <div className="field">
                    <label>Gender</label>
                    <input type="radio" value="female" name="gender"
                        onChange={updateGender} />
                    <label for="female">Female</label>
                    <input type="radio" value="male" name="gender"
                        onChange={updateGender} />
                    <label for="male">Male</label>
                </div>
                <div className="field">
                    <label>Age</label>
                    <input type="number" name="age" min="0" max="100"
                        onChange={changeHandler}/>
                </div>
                <div className="field">
                    <label>Are you traveling alone?</label>
                    <input type="radio" id="alone" name="numPeople"/>
                    <label for="alone">Yes</label>
                    <input type="radio" id="morePeople" name="numPeople" />
                    <label for="morePeople">No</label>
                </div>
                <div className="field">
                    <label> How many additional people will you be travelling with (not including yourself)</label>
                    <input type="number" name="numPeople" min="1" max="10"/>
                </div>
                <div className="field">
                    <label>Are you traveling with pets?</label>
                    <input type="radio" id="withPet" name="hasPets" />
                    <label for="withPet">Yes</label>
                    <input type="radio" id="withoutPet" name="hasPets" />
                    <label for="withoutPet">No</label>
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form>
        </div>
    );
}

export default RequestForm;
