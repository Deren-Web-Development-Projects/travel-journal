import React from "react";
import image from "./images/newYorkCity.jpg";


export default function LocationCard(props) {
    return (
        <div>
            <img src={image} alt={props.img} />
        </div>
    )
}