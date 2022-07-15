import React from "react";
import Button from "./Button";
import EdField from "./EdField";

const Education = (props) => {
    const { edit, handleChange, group, addEducation, handleDelete } = props;
    let aux = '';
    if (edit === true) aux = 'show';
 return (
    <div>
        <h3>Education</h3>
        <div>
            {group.map((course) => {
                return <EdField key = {course.id} edit = {edit} course = {course}
                    handleChange = {handleChange} handleDelete = {handleDelete}/>
            })}
        </div>
        
        <Button onClick = {(e) => addEducation('', e)} name = "addJob"
            text = "+Add Education" type = 'button' className = {aux}/>
    </div>
 )
} 

export default Education