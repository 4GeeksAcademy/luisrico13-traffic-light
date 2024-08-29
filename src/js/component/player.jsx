import React, { useState } from "react";

    const Player = () => {

        const [ color, setColor ] = useState("red");


    return(
        <>
        <div>
            <div className = 'palito'></div>
            <div className = 'bloque'>
                <div 
                onClick={() => setColor ("red")}
                className = {"luz red" + ((color == "red") ? " glow" : "")}>
                
                </div>
                <div 
                onClick={() => setColor ("yellow")}
                className = {"luz yellow" + ((color == "yellow") ? " glow" : "")}></div>
                <div 
                onClick={() => setColor ("green")}
                className = {"luz green" + ((color == "green") ? " glow" : "")}></div>
            </div>
        </div>
        </>
    )
}

export default Player