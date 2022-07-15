import React from "react";

const Button = (props) => {
    const { onClick, text, name, type, id, className } = props;
    let aux = '';
    if (className) aux = className;
 return (
    <button className={aux} type = {type} onClick = {(e) => onClick(name, id, e)}>
        {text}
    </button>
 )
}

export default Button