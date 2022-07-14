import React from "react";
import Button from "./Button";
import Field from "./Field";
import LongField from "./LongField";

const JobField = (props) => {
    const { edit, handleChange, job, handleDelete } = props;
 return (
    <div>
        <Field type = 'text' value = {job.position} edit = {edit} handleChange = {handleChange}
            name = 'position' id = {job.id} group = 'jobs'/>
        <Field type = 'text' value = {job.company} edit = {edit} handleChange = {handleChange}
            name = 'company' id = {job.id} group = 'jobs'/>
        <Field type = 'text' value = {job.city} edit = {edit} handleChange = {handleChange}
            name = 'city' id = {job.id} group = 'jobs'/>
        <Field type = 'text' value = {job.start} edit = {edit} handleChange = {handleChange}
            name = 'start' id = {job.id} group = 'jobs'/>
        <Field type = 'text' value = {job.end} edit = {edit} handleChange = {handleChange}
            name = 'end' id = {job.id} group = 'jobs'/>
        <LongField value = {job.description} edit = {edit} handleChange = {handleChange}
            name = 'description' id = {job.id} group = 'jobs'/>
        <Button onClick = {(e) => handleDelete('jobs', job.id, e)} name = "deleteJob"
            text = "Delete" type = 'button'/>
    </div>
 )
}

export default JobField