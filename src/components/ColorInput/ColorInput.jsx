import React from "react";
import { useState } from "react";
import './colorinput.css'
import { useFetchColors } from "../../useFetchColors";

export const ColorInput = ({setColorList, setLoading, loading}) => {
    const [sat, setSat] = useState(0)
    const [light, setLight] = useState(0)
    const [valid, setValid] = useState(true)
    const { getColors } = useFetchColors()
    const validationRegex = /(\d|Backspace|Enter|Delete|ArrowDown|ArrowRight|ArrowLeft|ArrowUp)/

    const handleSubmit = () => {
        if(sat > 100 || light > 100){
            setValid(false)
        } else {
            getColors(sat, light, setColorList, setLoading)
            setSat(0)
            setLight(0)
            setValid(true)
        }
    }

    return (
        <>
        <div className="color-input">
            <label className="label-input">
                Saturation %
                <input className="text-input" type="number" value={sat} min={0} max={100} style={sat > 100 ? {'border': 'solid 1px red'} : null} onKeyDown={(event) => {
                    if (!validationRegex.test(event.key)) {
                        event.preventDefault();
                    }
                }} onChange={e => setSat(e.target.value)} />
            </label>
            <label className="label-input">
                Lightness %
                <input className="text-input" type="number" value={light} min={0} max={100} style={light > 100 ? {'border': 'solid 1px red'} : null} onKeyDown={(event) => {
                    if (!validationRegex.test(event.key)) {
                        event.preventDefault();
                    }
                }} onChange={e => setLight(e.target.value)} />
            </label>
            <button className="submit-button" onClick={handleSubmit} disabled={loading}>Submit</button>
        </div>
        {!valid && <div style={{'color': 'red'}}>Input error: Valid percentages are between 0-100%.</div>}
        <div>🧐 Pro tip! You can click on a color to copy its RGB value to your clipboard.</div>
        </>
    )
}