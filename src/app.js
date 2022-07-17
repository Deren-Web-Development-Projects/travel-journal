import React from "react";
import LocationCard from "./locationCard";
import travelData from "./travelData";

export default function App() {
    const travelCards = travelData.map(place => {
        return (
            <LocationCard 
                key={place.id}
                location={place.location}
                state={place.state}
                id={place.id}
                image={place.thumbnail}
            />
        )     
    })
    return (
        <div>
            {travelCards}
        </div>
    )
}

