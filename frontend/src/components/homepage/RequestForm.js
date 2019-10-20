import React from "react";
import './style.css';
import Gender from './chooseGender.js';
import Age from './chooseAge.js';
import ServiceOption from './ServiceOption.js';
import UserLocation from './userLocation.js';



const RequestForm = ({updateService, updateGender, changeHandler,serviceOption}) => {

    return(
        <div className="containerx">
            <form autocomplete="off">

                <div className="form-group">
                    <label>Nickname or Codeword</label>
                    <input type="text" id="userName" name="name" className="form-control"
                        onChange={changeHandler}/>
                </div>

                <UserLocation serviceOption={serviceOption}/>

                <div className="form-group">
                    <label>Gender</label>
                    <input type="radio" value="female" name="gender"
                        onChange={updateGender} />
                    <label className="notBold"for="female">Female</label>
                    <input type="radio" value="male" name="gender"
                        onChange={updateGender} />
                    <label className="notBold"for="male">Male</label>
                </div>

                <div className="form-group">
                    <label id="labelage">Age</label>
                    <input type="number" name="age" min="0" max="100"
                        onChange={changeHandler}/>
                </div>

                <div className="form-group">
                    <label>Are you traveling alone?</label>
                    <input type="radio" id="alone" name="numPeople"/>
                    <label className="notBold" for="alone">Yes</label>
                    <input type="radio" id="morePeople" name="numPeople" />
                    <label className="notBold" for="morePeople">No</label>
                </div>

                <div className="form-group">
                    <label id="sizelabel"> How many additional people will you be travelling with?</label>
                    <input type="number" name="numPeople" min="1" max="10"/>
                </div>

                <div className="form-group">
                    <label>Are you traveling with pets?</label>
                    <input type="radio" id="withPet" name="hasPets" />
                    <label className="notBold" for="withPet">Yes</label>
                    <input type="radio" id="withoutPet" name="hasPets" />
                    <label  className="notBold" for="withoutPet">No</label>
                </div>
                <div className="formButtons">
                    <div className="bt">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                    <div className="bt"><a href="http://cnn.com" class="btn btn-danger">Close Form!</a></div>
                </div>
            </form>
        </div>
    );
}

export default RequestForm;
