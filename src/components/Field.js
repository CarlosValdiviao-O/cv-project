import React from "react";

const Field = (props) => {
    const { edit, type, name, handleChange, id, group, value } = props;
    if(edit === true)
    return (
        <input type = {type} placeholder = {value} className = {name}
            onChange = {(e) => handleChange(group, name, id, e) }>
        </input>
    )
    else
    return (
        <p className = {name}>{value}</p>
    )

}

export default Field