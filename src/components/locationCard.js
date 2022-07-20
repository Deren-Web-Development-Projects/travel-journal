import React from "react";
import "../styles/card.css";

export default function LocationCard(props) {
    return (
        <div className="itemCard">
            <a href={props.fullSize} target="_blank" rel="noopener noreferrer" id="image">
                <img src={props.image} alt={props.location} />
            </a>
            <div className="info">
                <div className="infoHeader">
                    <img className="pinImage" src="images/pin.png" alt="pin" />
                    <p>{props.state}</p>
                    <a href={props.googleMaps} target="_blank" rel="noopener noreferrer">
                        View on Google Maps
                    </a>
                </div>
                <div className="infoBody">
                    <p className="infoBodyTitle">{props.location}</p>
                    <p className="infoBodyDates">{props.startDate} - {props.startDate}</p>
                    <p className="infoBodyDesc">{props.description}</p>
                    <p className="infoBodyNote">* Click the image for the full image.</p>
                </div>
            </div>
        </div>
    )
}