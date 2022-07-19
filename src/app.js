import React from "react";
import Header from "./components/header";
import LocationCard from "./components/locationCard";
import travelData from "./components/travelData";
import "./styles/mainStyles.css";

export default function App() {
    const travelCards = travelData.map(place => {
        return (
            <LocationCard 
                key={place.id}
                location={place.location}
                state={place.state}
                id={place.id}
                image={place.image}
                fullSize={place.fullSize}
            />
        )     
    })
    
    return (
        <div>
            <Header />
            {travelCards}
        </div>
    )
}

