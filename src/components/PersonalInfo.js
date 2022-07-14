import React from "react";
import Field from "./Field";
import LongField from "./LongField";

const PersonalInfo = (props) => {
    const { edit, handleChange } = props;
 return (
    <div>
        <h3>Personal Info</h3>
        <Field type='text' title='Full Name' edit={edit} handleChange={handleChange} name='fullName' id="" group=""/>
        <Field type='text' title='Profession' edit={edit} handleChange={handleChange} name='profession' id="" group=""/>
        <Field type='text' title='Address' edit={edit} handleChange={handleChange} name='address' id="" group=""/>
        <Field type='tel' title='Phone Number' edit={edit} handleChange={handleChange} name='phoneNumber' id="" group=""/>
        <Field type='email' title='E-Mail' edit={edit} handleChange={handleChange} name='email' id="" group=""/>
        <LongField title='Description' edit={edit} handleChange={handleChange} name='description' id="" group=""/>
    </div>
 )
}

export default PersonalInfo