import React from "react";

const Button = (props) => {
    const { onClick, text, name, type, id } = props
 return (
    <button type = {type} onClick = {(e) => onClick(name, id, e)}>
        {text}
    </button>
 )
}

export default Button