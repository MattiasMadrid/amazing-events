import axios from 'axios'
import { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { AiOutlineFieldNumber,AiFillDollarCircle} from "react-icons/ai";
import { BiSolidCategory,BiSolidMap } from "react-icons/bi";
import { BsFillCalendarDateFill,BsFillPersonFill } from "react-icons/bs";
import { GrCapacity } from "react-icons/gr";




const Details = () =>{
    let idurl = useParams()
    // console.log(idurl.id)

    const [eventoDetalle, setEventoDetalle] = useState({})
    let currentDate = ""
    useEffect(()=>{
      axios.get("https://mindhub-xj03.onrender.com/api/amazing").then((response)=>{
        currentDate = response.data.currentDate
        let eventos_lista = response.data.events
        let eventoFiltrado = eventos_lista.find((eventos) => eventos._id == idurl.id)
        setEventoDetalle(eventoFiltrado)
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
                        <p style={{fontFamily: 'Caprasimo',fontSize:'35px'}}>Details</p>
                        </td>
                        <td width="10%" align="right">
                            <input type="button" className="btn btn-secondary btn-sm" value=">"/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            {/* CREACION CARTA */}
            <center>
            <Card style={{ width: '60rem',height:'100%',flexDirection:'row',backgroundColor:'#FAF9F8' }}>
            <Card.Img variant="top" style={{ width: '500px'}}  src={eventoDetalle.image} />
                <Card.Body>
                    <Card.Title style={{fontFamily: 'Russo One',}}>{eventoDetalle.name}</Card.Title>
                    <Card.Text>{eventoDetalle.description}</Card.Text>
                    <p><AiOutlineFieldNumber/> <b>Id :</b> {eventoDetalle._id}</p>
                    <p><BiSolidCategory/> <b>Categoria :</b> {eventoDetalle.category} </p>
                    <p><BsFillCalendarDateFill/> <b>Fecha :</b> {eventoDetalle.date}</p>
                    <p><BiSolidMap/> <b>Lugar :</b> {eventoDetalle.place} </p>
                    <p><AiFillDollarCircle/> <b>Precio :</b> {eventoDetalle.price} </p>
                    <p><GrCapacity/> <b>Capacidad : </b> {eventoDetalle.capacity}</p>
                    <p><BsFillPersonFill/> {eventoDetalle.assistance ? <label><b>Asistencia: </b>{eventoDetalle.assistance}</label>: <label><b>Estimacion: </b>{eventoDetalle.estimate}</label>}</p>
                </Card.Body>
                
                {/* <ListGroup className="list-group-flush">
                    <ListGroup.Item><AiOutlineFieldNumber/> <b>Id :</b> {eventoDetalle._id}</ListGroup.Item>
                    <ListGroup.Item><BiSolidCategory/> <b>Categoria :</b> {eventoDetalle.category} </ListGroup.Item>
                    <ListGroup.Item><BsFillCalendarDateFill/> <b>Fecha :</b> {eventoDetalle.date} </ListGroup.Item>
                    <ListGroup.Item><BiSolidMap/> <b>Lugar :</b> {eventoDetalle.place} </ListGroup.Item>
                    <ListGroup.Item><AiFillDollarCircle/> <b>Precio :</b> {eventoDetalle.price} </ListGroup.Item>
                    <ListGroup.Item><GrCapacity/> <b>Capacidad : </b> {eventoDetalle.capacity}</ListGroup.Item>
                    <ListGroup.Item><BsFillPersonFill/> {eventoDetalle.assistance ? <label><b>Asistencia: </b>{eventoDetalle.assistance}</label>: <label><b>Estimacion: </b>{eventoDetalle.estimate}</label>}</ListGroup.Item>
                </ListGroup> */}
            </Card>
            </center>





        </>
    )

}

export default Details