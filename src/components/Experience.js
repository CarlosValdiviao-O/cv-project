import React from "react";
import Button from "./Button";
import JobField from "./JobField";

const Experience = (props) => {
    const { edit, handleChange, group, addJob, handleDelete } = props;
 return (
    <div>
        <h3>Working Experience</h3>
        <div>
            {group.map((job) => {
                return <JobField key = {job.id} edit = {edit} handleChange = {handleChange}
                    job = {job} handleDelete = {handleDelete}/>
            })}
        </div>
        
        <Button onClick = {(e) => addJob('', e)} name = "addJob"
            text = "+Add Work Experience" type = 'button'/>
    </div>
 )
} 

export default Experience