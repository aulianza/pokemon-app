import React from "react";

import "./Button.css";

const Button = (props) => {
    const classes = ["btn"];

    if (props.buttonColor) classes.push(props.buttonColor);
    if (props.isBlock) classes.push("btn-block");

    const clickHandler = () => {
        props.onButtonClicked();
    }

    return <button className={classes.join(" ")} onClick={clickHandler}>{props.title}</button>;
};

export default Button;
