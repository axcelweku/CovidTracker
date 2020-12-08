import React, {useEffect, useState} from "react";
import axios from "axios";
import NumberFormat from "react-number-format"

const Provinsi = () => {
    const[userprov,setUserprov] = useState([])
    

    useEffect(() => {
        axios
         .get("https://indonesia-covid-19.mathdro.id/api/provinsi")
         .then((response) =>  setUserprov(response.data.data) );
    }, []);

    return (
        <div>
            <b><i> Jumlah Kasus Dari Berbagai <br></br>
                Provisni Yang Ada Di Indonesia</i></b>
        <table border="1">
               <tr>
                   <td>
                       Provinsi
                   </td>
                   <td>
                       Positif
                   </td>
                   <td>
                       Sembuh
                   </td>
                   <td>
                        Meninggal
                   </td>
               </tr>
               {userprov.map((item)=>{
                   return(
                       <tr>
                           <td>
                               {item.provinsi}
                           </td>
                           <td>
                                <NumberFormat value={item.kasusPosi} displayType={'text'} thousandSeparator={true}/>
                           </td>
                           <td>
                           <NumberFormat value={item.kasusSemb} displayType={'text'} thousandSeparator={true}/>
                           </td>
                           <td>
                           <NumberFormat value={item.kasusMeni} displayType={'text'} thousandSeparator={true}/>
                           </td>
                       </tr>
                   )
               })
               }
               </table>
        </div>
    )
            }
export default Provinsi;