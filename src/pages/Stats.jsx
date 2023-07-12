import axios from 'axios'
import Cards from "../components/Cards/Cards"
import { useParams } from "react-router-dom"
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react'


const Stats = () =>{

  const [eventos, setEventos] = useState([])
  let [eventoMayorAsistencia, setEventoMayorAsistencia] = useState([])
  let [eventoMenorAsistencia, setEventoMenorAsistencia] = useState([])
  let [eventoMayorCapacidad, setEventoMayorCapacidad] = useState([])
  let [eventosPasado, setEventosPasado] = useState([])
  let [estadisticasPasadas, setEstadisticasPasadas] = useState([]);



    let currentDate = ""

    
    useEffect(()=>{
      axios.get("https://mindhub-xj03.onrender.com/api/amazing").then((response)=>{
        currentDate = response.data.currentDate
        let listaEventos = response.data.events
        setEventos(response.data.events)

        let EventoMayorPorcentajeAsistencia = "0"
        let EventoMenorPorcentajeAsistencia = "101"
        let EventoMayorCapac = "0"

        let tabla1 = listaEventos.filter((events) => {
          //LOGICA EVENTO MAYOR ASISTENCIA
          if (events.assistance*100/events.capacity>EventoMayorPorcentajeAsistencia) {
            EventoMayorPorcentajeAsistencia = events.assistance*100/events.capacity 
            eventoMayorAsistencia = events
          }
          
          //LOGICA EVENTO MENOR ASISTENCIA
          if (events.assistance*100/events.capacity<=EventoMenorPorcentajeAsistencia) {
            EventoMenorPorcentajeAsistencia = events.assistance*100/events.capacity 
            eventoMenorAsistencia = events
          }
          //LOGICA EVENTO MAYOR CAPACIDAD
          if (events.capacity>EventoMayorCapac) {
            EventoMayorCapac = events.capacity 
            eventoMayorCapacidad = events
          }
        })
        setEventoMayorAsistencia(eventoMayorAsistencia)
        setEventoMenorAsistencia(eventoMenorAsistencia)
        setEventoMayorCapacidad(eventoMayorCapacidad)

        let eventoFiltradoPasado = listaEventos.filter((eventpast) => eventpast.date < currentDate)
        setEventosPasado(eventoFiltradoPasado)

        

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
                      <p style={{fontFamily: 'Caprasimo',fontSize:'35px'}}>Stats</p>
                      </td>
                      <td width="10%" align="right">
                          <input type="button" className="btn btn-secondary btn-sm" value=">"/>
                      </td>
                  </tr>
                </tbody>
              </table>
            <center>


            <Table hover variant="secondary" size="sm" style={{width:'1000px'}}>
              <thead>
                <tr>
                  <th colSpan={3}>Event Statistics</th>
                </tr>
              </thead>
  
              <tbody bgcolor="white">
                <tr style={{fontWeight:'bold'}}>
                  <td>Event with the highest percentage of attendance</td>
                  <td>Event with the lowest percentage of attendance</td>
                  <td>Event with larger capacity</td>
                </tr>
                <tr>
                  <td>
                    {eventoMayorAsistencia.name} {eventoMayorAsistencia.assistance*100/eventoMayorAsistencia.capacity}%
                  </td>
                  <td>
                    {eventoMenorAsistencia.name} {eventoMenorAsistencia.assistance*100/eventoMenorAsistencia.capacity}%
                  </td>
                  <td>
                    {eventoMayorCapacidad.name} {eventoMayorCapacidad.capacity} persons
                  </td>
                </tr>
              </tbody>
            </Table>
            <br/>
            <Table hover variant="secondary" size="sm" style={{width:'1000px'}}>
              <thead>
                <tr>
                  <th colSpan={3}>Upcoming event statistics by category</th>
                </tr>
              </thead>
  
              <tbody bgcolor="white">
                <tr style={{fontWeight:'bold'}}>
                  <td>Categories</td>
                  <td>Revenues</td>
                  <td>Percentage of attendance</td>
                </tr>
                <tr>
                  <td width={'33%'}>INFO</td>
                  <td width={'33%'}>INFO</td>
                  <td>INFO</td>
                </tr>
              </tbody>
            </Table>
            <br/>
            <Table hover variant="secondary" size="sm" style={{width:'1000px'}}>
              <thead>
                <tr>
                  <th colSpan={3}>Past events statistitcs by category</th>
                </tr>
              </thead>
  
              <tbody bgcolor="white">
                <tr style={{fontWeight:'bold'}}>
                  <td width={'33%'}>Categories</td>
                  <td width={'33%'}>Revenues</td>
                  <td>Percentage of attendance</td>
                </tr>
                <tr>
                  <td>INFO</td>
                  <td>INFO</td>
                  <td>INFO</td>
                </tr>
              </tbody>
            </Table>

            </center>
        </>
    )

}

export default Stats







































