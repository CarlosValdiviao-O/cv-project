import React from "react";

const Field = (props) => {
    const { edit, type, name, handleChange, id, group, value } = props;
    if(edit === true)
    return (
        <input type = {type} placeholder = {value}
            onChange = {(e) => handleChange(group, name, id, e) }>
        </input>
    )
    else
    return (
        <p>{value}</p>
    )

}

export default Field