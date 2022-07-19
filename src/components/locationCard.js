import React from "react";
import "../styles/card.css";

export default function LocationCard(props) {
    return (
        <div className="itemCard">
            <a href={props.fullSize} target="_blank" rel="noopener noreferrer" id="image">
                <img src={props.image} alt={props.location} />
            </a>
            <div>
                <h1>State: {props.state}</h1>
                <h2>Location: {props.location}</h2>
            </div>
        </div>
    )
}