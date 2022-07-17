import React from "react";
import LocationCard from "./locationCard";
import travelData from "./travelData";

export default function App() {
    const travelCards = travelData.map(place => {
        return (
            <LocationCard 
                location={place.location}
                state={place.state}
                id={place.id}
                image={place.image}
            />
        )     
    })
    return (
        <div>
            {travelCards}
        </div>
    )
}

