import React from "react";
import Field from "./Field";

const PersonalInfo = (props) => {
    const { edit, handleChange } = props;
 return (
    <div>
        <h3>Personal Info</h3>
        <Field type='text' title='Full Name' edit={edit} handleChange={handleChange} name='fullName'/>
        <Field type='text' title='Profession' edit={edit} handleChange={handleChange} name='profession'/>
    </div>
 )
}

export default PersonalInfo