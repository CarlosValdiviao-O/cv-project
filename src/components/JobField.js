import React from "react";
import Field from "./Field";
import LongField from "./LongField";

const JobField = (props) => {
    const { edit, handleChange, job } = props;
 return (
    <div>
        <Field type='text' title='Position' edit={edit} handleChange={handleChange} name='position' id={job.id} group='jobs'/>
        <Field type='text' title='Company' edit={edit} handleChange={handleChange} name='company' id={job.id} group='jobs'/>
        <Field type='text' title='City' edit={edit} handleChange={handleChange} name='city' id={job.id} group='jobs'/>
        <Field type='text' title='Start(YYYY)' edit={edit} handleChange={handleChange} name='start' id={job.id} group='jobs'/>
        <Field type='text' title='End(YYYY)' edit={edit} handleChange={handleChange} name='end' id={job.id} group='jobs'/>
        <LongField title='Description' edit={edit} handleChange={handleChange} name='description' id={job.id} group='jobs'/>
    </div>
 )
}

export default JobField