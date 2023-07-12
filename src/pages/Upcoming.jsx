import Cards from "../components/Cards/Cards"
import axios from 'axios'
import { useEffect, useState } from 'react'

const Upcoming = () =>{

    const [eventosFuturo, setEventosFuturo] = useState([])
    let currentDate = ""
    useEffect(()=>{
      axios.get("https://mindhub-xj03.onrender.com/api/amazing").then((response)=>{
        currentDate = response.data.currentDate
        // console.log(currentDate)
        let eventos_lista = response.data.events
        //console.log(response.data.events)   
        let eventoFiltrado = eventos_lista.filter((eventos) => eventos.date > currentDate)
        setEventosFuturo(eventoFiltrado)

      })
    },[])

    console.log(eventosFuturo)

    return(
        <>
            <br/>
            <center>
              <table align="center">
                <tbody>
                  <tr>
                      <td width="10%">
                          <input type="button" className="btn btn-secondary btn-sm" value="<"/>
                      </td>
                      <td align="center" width="80%">
                      <p style={{fontFamily: 'Caprasimo',fontSize:'35px'}}>Upcoming Events</p>
                      </td>
                      <td width="10%" align="right">
                          <input type="button" className="btn btn-secondary btn-sm" value=">"/>
                      </td>
                  </tr>
                </tbody>
              </table>
            <Cards eventos={eventosFuturo}/>
            </center>
        </>
    )

}

export default Upcoming