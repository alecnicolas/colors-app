import React from "react";
import './colorgrid.css';
import { ColorSquare } from "./ColorSquare";

export const ColorGrid = ({colorList}) => {
    return (
        <div className="color-grid">
            {colorList && Object.keys(colorList).map(color => <ColorSquare key={color} color={colorList[color]} />)}
        </div>
    )
}