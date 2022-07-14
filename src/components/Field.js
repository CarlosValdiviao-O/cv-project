import React from "react";

const Field = (props) => {
    const { edit, type, title, name, handleChange, id, group } = props;
    if(edit === true)
    return (
        <input type={type} placeholder={title} onChange={(e) => handleChange(group, name, id, e) }>
        </input>
    )
    else
    return (
        <p>{title}</p>
    )

}

export default Field