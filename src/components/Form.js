import React from "react";
import PersonalInfo from "./PersonalInfo";

const Form = (props) => {
    const { edit, handleChange } = props;
 return (
    <form>
        <fieldset>
            <PersonalInfo edit={edit} handleChange={handleChange}/>
        </fieldset>
    </form>
 )
}

export default Form