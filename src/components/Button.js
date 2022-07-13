import React from "react";

const Button = (props) => {
    const { onClick, text, name } = props
 return (
    <button onClick={() => onClick(name)}>
        {text}
    </button>
 )
}

export default Button