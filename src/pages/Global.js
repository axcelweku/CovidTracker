import React, {useEffect, useState} from "react";
import axios from "axios";
import NumberFormat from "react-number-format"

const Global = () => {
    const[cfm, setCfm] = useState([])
    const[rcv, setRcv] = useState([])
    const[dead, setDead] = useState([])

    useEffect(() => {
        axios
            .get("https://covid19.mathdro.id/api")
            .then((response) => {
                setCfm(response.data.confirmed.value)
                setRcv(response.data.recovered.value)
                setDead(response.data.deaths.value)
            });
    });
    return (
        <div className = "center">
            <h1>Global</h1>
            <h1 className="card-container1"><p>Confirmed <NumberFormat value={cfm} thousandSeparator={true} /></p></h1>
            <h1 className="card-container2"><p>Recovered <NumberFormat value={rcv} thousandSeparator={true} /></p></h1>
            <h1 className="card-container3"><p>Deaths <NumberFormat value={dead} thousandSeparator={true} /></p></h1>
        </div>
    );
};

export default Global;