import React from "react";
import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";
import Education from "./Education";
import Button from "./Button";

const Form = (props) => {
    const { edit, handleChange, jobs, handleGroupChange, addJob, handleDelete, 
            addEducation, education, onSubmit, personalInfo } = props;
 return (
    <form>
        <fieldset>
            <PersonalInfo edit = {edit} handleChange = {handleChange} 
                personalInfo = {personalInfo}/>
        </fieldset>
        <fieldset>
            <Experience edit = {edit} handleChange = {handleGroupChange} group = {jobs}
                addJob = {addJob} handleDelete = {handleDelete}/>
        </fieldset>
        <fieldset>
            <Education edit = {edit} handleChange = {handleGroupChange} group = {education}
                addEducation = {addEducation} handleDelete = {handleDelete}/>
        </fieldset>
        <Button onClick = {() => onSubmit()} text = "Submit" name = "submit" type = 'button'/>
    </form>
 )
}

export default Form