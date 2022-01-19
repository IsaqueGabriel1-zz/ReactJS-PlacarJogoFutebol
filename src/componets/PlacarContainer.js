import React from "react";
import Time from "./Time";
import './PlacarCon.css'

function PlacarContainer(){
    return(
        <>
        <div className="PlacarContainer">
            <div>
                <h2>Casa</h2>
                <Time nome="Santos"/>
            </div>
            <div className="InfoPartida">
                <div className="Local">
                    Vila Belmiro/SP
                </div>
                <p>01/06/2022 - 19:00h</p>
            </div>
            <div>
            <h2>Visitante</h2>
                <Time nome="Palmeiras" />
            </div>
        </div>
        </>
    )
}

export default PlacarContainer