import React from "react";
import LocationCard from "./locationCard";
import travelData from "./travelData";

export default function App() {
    const travelCards = travelData.map(place => {
        return (
            <LocationCard 
                color={place.color} 
                size={place.size} 
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

