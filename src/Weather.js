import React from "react";
import "./Weather.css";
export default function Weather() {
    return (<div className="Weather"> 
    <h1>New York</h1>
    <ul>
        <li>Wednesday 07:30</li>
        <li>Mostly Cloudy</li>
    </ul>
    <div className="row">
        <div className="col-6">
        <img src="https://cdn-icons-png.flaticon.com/512/1163/1163736.png" alt="Mostly Cloudy"/>
        6°C
        </div>
        <div className="col-6">
        <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 13 KM/H</li>
        </ul>
        </div>
    </div>
    </div>
    );    
}