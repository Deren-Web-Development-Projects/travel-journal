import React from "react";
import '../styles/header.css';

export default function footer() {
    return (
        <>
            <div id="footer">
                <img className="footerImg" src="images/sun.png" alt="sunIcon" />
                <p className="footerItem">Created 2022</p>
                <img className="footerImg" src="images/sun.png" alt="sunIcon" />
                <p className="footerItem">All icons from :</p>
                <a href="https://www.flaticon.com/" title="sun icons" target="_blank" rel="noopener noreferrer" className="footerItem">Flaticon</a>
                <img className="footerImg" src="images/sun.png" alt="sunIcon" />
            </div>
            <div id="credits">
                <a href="https://www.flaticon.com/free-icons/world" title="world icons">World icons created by Freepik</a>
                <a href="https://www.flaticon.com/free-icons/location" title="location icons">Location icons created by kmg design</a>
                <a href="https://www.flaticon.com/free-icons/sun" title="sun icons">Sun icons created by Freepik</a>
            </div>
        </>
        
    )
};

<a href="https://www.flaticon.com/free-icons/sun" title="sun icons">Flaticon</a>