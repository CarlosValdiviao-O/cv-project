import React from "react";
import Button from "./Button";
import Field from "./Field";

const EdField = (props) => {
    const { edit, handleChange, course, handleDelete } = props;
 return (
    <div>
        <Field type = 'text' edit = {edit} id = {course.id} handleChange = {handleChange}
            name = 'course' group = 'education' value = {course.course}/>            
        <Field type = 'text' edit = {edit} id = {course.id} handleChange = {handleChange}
            name = 'institution' group = 'education' value = {course.institution}/>    
        <Field type = 'text' edit = {edit} id = {course.id} handleChange = {handleChange}
            name = 'start' group = 'education' value = {course.start}/>
        <Field type = 'text' edit = {edit} id = {course.id} handleChange = {handleChange}
            name = 'end' group = 'education' value = {course.end}/>
        <Button onClick = {(e) => handleDelete('education', course.id, e)}
            name="deleteCourse" text = "Delete" type = 'button'/>
    </div>
 )
}

export default EdField