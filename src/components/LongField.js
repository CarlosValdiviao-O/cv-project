import React from "react";

const LongField = (props) => {
    const { edit, name, handleChange, id, group, value } = props;
    if(edit === true)
    return (
        <textarea placeholder = {value} className = {name}
            onChange = {(e) => handleChange(group, name, id, e) }>
        </textarea>
    )
    else
    return (
        <p className = {name}>{value}</p>
    )

}

export default LongField