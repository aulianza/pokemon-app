import React from "react";
import "./Card.css";

const Card = (props) => {
    const classes = ["card"];

    if (props.className) classes.push(props.className);
    if (props.isCardWave) classes.push("card-wave");

    return (
        <div
            className={classes.join(" ")}
            style={props.inlineStyle ? props.inlineStyle : {}}
        >
            {props.children}
        </div>
    );
};

export default Card;
