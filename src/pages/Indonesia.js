import React, {useEffect, useState} from "react";
import axios from "axios";
import NumberFormat from "react-number-format"

const Indonesia = () => {
    const[cfm, setCfm] = useState([])
    const[rcv, setRcv] = useState([])
    const[dead, setDead] = useState([])

    useEffect(() => {
        axios
            .get("https://indonesia-covid-19.mathdro.id/api")
            .then((response) => {
                setCfm(response.data.jumlahKasus)
                setRcv(response.data.sembuh)
                setDead(response.data.meninggal)
            });
    });
    return (
        <div className = "center">
        <h1>Indonesia</h1>
            <h1 className="card-container1"><p>Dikonfirmasi <NumberFormat value={cfm} thousandSeparator={true} displayType = {'text'}/></p></h1>
            <h1 className="card-container2"><p>Sembuh <NumberFormat value={rcv} thousandSeparator={true} displayType = {'text'}/></p></h1>
            <h1 className="card-container3"><p>Meninggal <NumberFormat value={dead} thousandSeparator={true} displayType = {'text'}/></p></h1>
        </div>
    );
};

export default Indonesia;