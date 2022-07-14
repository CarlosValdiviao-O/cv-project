import React from "react";
import Field from "./Field";
import LongField from "./LongField";

const PersonalInfo = (props) => {
    const { edit, handleChange, personalInfo } = props;
 return (
    <div>
        <h3>Personal Info</h3>
        <Field type = 'text' title = 'Full Name' edit = {edit} handleChange = {handleChange}
            name = 'fullName' id = "" group = "" value = {personalInfo.fullName}/>
        <Field type = 'text' title = 'Profession' edit = {edit} handleChange = {handleChange}
            name = 'profession' id = "" group = "" value = {personalInfo.profession}/>
        <Field type = 'text' title = 'Address' edit = {edit} handleChange = {handleChange}
            name = 'address' id = "" group = "" value = {personalInfo.address}/>
        <Field type = 'tel' title = 'Phone Number' edit = {edit} handleChange = {handleChange}
            name = 'phoneNumber' id = "" group = "" value = {personalInfo.phoneNumber}/>
        <Field type = 'email' title = 'E-Mail' edit = {edit} handleChange = {handleChange}
            name = 'email' id = "" group = "" value = {personalInfo.email}/>
        <LongField title = 'Description' edit = {edit} handleChange = {handleChange}
            name = 'description' id = "" group = "" value = {personalInfo.description}/>
    </div>
 )
}

export default PersonalInfo