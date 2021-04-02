import React from "react";

// FUNCTION TO ZOOM OUT THE MAP
const handleZoomOut = (props) => (
    <button onClick={props.handleZoomOut}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="3"
        >
            
            <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
    </button>
)

export default handleZoomOut;