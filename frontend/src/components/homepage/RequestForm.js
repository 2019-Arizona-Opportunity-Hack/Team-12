import React from "react";
import './style.css';

const RequestForm = () => {
    return(
        <div className="container">
            <div className="field">
                <label>Name </label>
                <input type="text" id="userName" name="userName" />
            </div>
            <div className="field">
                <label>Address</label>
                <input type="text" id="currentLocation" name="currentLocation" />
            </div>
            <div className="field">
                <label>Gender</label>
                <input type="radio" id="female" name="gender" />
                <label for="female">Female</label>
                <input type="radio" id="male" name="gender" />
                <label for="male">Male</label>
            </div>
            <div>
                <label>Age</label>
                <input type="number" name="peopleQty" min="0" max="100" />
            </div>
            <div className="field">
                <label>Are you traveling alone?</label>
                <input type="radio" id="alone" name="numPeople" />
                <label for="alone">Yes</label>
                <input type="radio" id="morePeople" name="numPeople" />
                <label for="morePeople">No</label>
            </div>
            {/*ADD PERSON (ASK FOR AGE AND GENDER)*/}
            <div className="field">
                <label>Are you traveling with pets?</label>
                <input type="radio" id="withPet" name="pets" />
                <label for="withPet">Yes</label>
                <input type="radio" id="withoutPet" name="pets" />
                <label for="withoutPet">No</label>
            </div>
            <div>
                <input type="submit" />
            </div>
        </div>
    );
}

export default RequestForm;
