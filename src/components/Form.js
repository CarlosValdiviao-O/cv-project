import React from "react";
import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";

const Form = (props) => {
    const { edit, handleChange, jobs, handleGroupChange, addJob } = props;
 return (
    <form>
        <fieldset>
            <PersonalInfo edit={edit} handleChange={handleChange}/>
        </fieldset>
        <fieldset>
            <Experience edit={edit} handleChange={handleGroupChange} group={jobs} addJob={addJob} />
        </fieldset>
    </form>
 )
}

export default Form