import { useEffect, useState } from 'react'
import axios from 'axios'
import Cards from '../components/Cards/Cards'


const Home = () =>{

    const [eventos, setEventos] = useState([])
    let currentDate = ""
    useEffect(()=>{
      axios.get("https://mindhub-xj03.onrender.com/api/amazing").then((response)=>{
        currentDate = response.data.currentDate
        //console.log(currentDate)
        //console.log(response.data.events)   
        setEventos(response.data.events)
      })
    },[])



    return(
        <>
        <br/>
          <table align="center">
            <tbody>
            <tr>
                <td width="10%">
                    <input type="button" className="btn btn-secondary btn-sm" value="<"/>
                </td>
                <td align="center" width="80%">
                    <p style={{fontFamily: 'Caprasimo',fontSize:'35px'}}>Home</p>
                </td>
                <td width="10%" align="right">
                    <input type="button" className="btn btn-secondary btn-sm" value=">"/>
                </td>
            </tr>
            </tbody>
          </table>
          <Cards eventos={eventos}/>
        </>
    )

}

export default Home