import React from "react";

const Button = (props) => {
    const { onClick, text, name, type } = props
 return (
    <button type={type} onClick={(e) => onClick(name, e)}>
        {text}
    </button>
 )
}

export default Button