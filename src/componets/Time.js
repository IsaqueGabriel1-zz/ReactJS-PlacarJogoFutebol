import React, { useState } from "react";
import './Time.css'

function Time(props){

    const [placar, setPlacar] = useState(0)

    return(
        <>
        <div className="ContainerTime">
            <div className="NomeTime">
                <h1>{props.nome}</h1>
            </div>
            <div className="Placar">{placar}</div>
            <button className="btnGol" onClick={() => setPlacar(placar + 1)}>Gol!</button>
        </div>
        </>
    )
}


export default Time