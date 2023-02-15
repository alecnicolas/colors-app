import React, { useState } from "react";
import './colorgrid.css';

export const ColorSquare = ({ color }) => {
    const [hovering, setHover] = useState(false)
    const { name, rgb, hex } = color;

    const needsContrast = rgb.r > 240 && rgb.g > 240 && rgb.b > 240;

    const handleEnter = () => {
        setHover(true)
    }

    const handleLeave = () => {
        setHover(false)
    }

    return (
        <div className="color-square-wrapper">
            <div 
                className="color-square" 
                style={needsContrast ? { 'border': 'solid 2px lightgray', 'backgroundColor': hex?.value } : { 'backgroundColor': hex?.value }} 
                onClick={() => { navigator.clipboard.writeText(rgb.value) }}
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
            >
                <div className="color-square-overlay">{hovering && 'Click to copy rgb value to clipboard'}</div>
            </div>
            <p>{name?.value}</p>
            <p>{rgb?.value}</p>
        </div>

    )
}