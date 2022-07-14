import React from "react";

const LongField = (props) => {
    const { edit, title, name, handleChange, id, group } = props;
    if(edit === true)
    return (
        <textarea placeholder={title} onChange={(e) => handleChange(group, name, id, e) }>
        </textarea>
    )
    else
    return (
        <p>{title}</p>
    )

}

export default LongField