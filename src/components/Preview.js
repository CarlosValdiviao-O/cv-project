import React from "react";
import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";
import Education from "./Education";
import Button from "./Button";

const Preview = (props) => {
    const { edit, handleChange, jobs, handleGroupChange, addJob, handleDelete, 
            addEducation, education, onEdit, previewButton, personalInfo } = props;
 return (
    <div>
        <PersonalInfo edit = {edit} handleChange = {handleChange} 
            personalInfo = {personalInfo}/>        
        <Experience edit = {edit} handleChange = {handleGroupChange} group = {jobs}
            addJob = {addJob} handleDelete = {handleDelete}/>        
        <Education edit = {edit} handleChange = {handleGroupChange} group = {education}
            addEducation = {addEducation} handleDelete = {handleDelete}/>        
        <Button onClick = {() => onEdit()} text = {previewButton} name = "submit" type = 'button'/>
    </div>
 )
}

export default Preview
