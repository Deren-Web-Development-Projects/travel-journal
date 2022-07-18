import React from "react";

export default function LocationCard(props) {
    return (
        <div>
            <h1>State: {props.state}</h1>
            <h2>Location: {props.location}</h2>
            <h3>Id: {props.id}</h3>
            <h4>Image:</h4>
            <a href={props.fullSize} target="_blank" rel="noopener noreferrer">
                <img src={props.image} alt={props.location} />
            </a>
            <hr />
        </div>
    )
}