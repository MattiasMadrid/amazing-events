import {Link} from "react-router-dom"
import axios from 'axios'
import { AiFillEye } from "react-icons/ai";
import { BsFillCalendarDateFill} from "react-icons/bs";
import { BiSolidCategory} from "react-icons/bi";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react'
import { Card } from "react-bootstrap";
import Checkboxs from "../Filtros/Checkboxs";
import Buscador from "../Filtros/Buscador";

const Cards = (props) => {
    let eventos = props.eventos
    let categ = props.filtrarCategoria
    let [events, setEvents] = useState([])
    let [eventosFiltrados, setEventosFiltrados] = useState([])
    let [categoriasFiltradas, setCategoriasFiltradas] = useState([])
    let [palabraBuscador,setPalabraBuscador] = useState([])

    const filtrarEventos = (text) => {
           let eventosFiltradosPorTexto = events.filter((event) => event.name.toLowerCase().includes(text.toLowerCase()))
           if(text == "") {
            setEventosFiltrados(events)
           }else{
            setPalabraBuscador(text)
            setEventosFiltrados(eventosFiltradosPorTexto)  
           }
    }
    
    const filtrarCategorias = (listCat) => {
        let eventosFiltradosPorCategoria = events.filter((event) => listCat.includes(event.category))

        if (listCat.length>0) {
            setEventosFiltrados(eventosFiltradosPorCategoria)
        }else{
            setEventosFiltrados(events)
        }
 }

    useEffect(()=>{
        setEvents(eventos)
        setEventosFiltrados(eventos)
        //setCategoriasFiltradas(eventos)
    },[eventos])

    return(
        <>
        <br/>
        <div className="row" style={{marginLeft:'4rem'}}>
            <Checkboxs eventos={eventos} filtrarCategorias={filtrarCategorias}/>
            <Buscador filtrarEventos={filtrarEventos}  /> 
        </div>
        <br/>

        {/* Grid para ordenar las cartas hacia la derecha */}
        <div className="row">
        {/* Llenado de la carta */}

        {eventosFiltrados.map((data, index) => {
            return (<div key={data._id}> 
                     
                <div className="card mr-2" style={{width: '18rem',height:"28rem",objectFit:'cover',marginLeft:"4rem"}}>
                    <img className="card-img-top" style={{width: '100%',height:"10rem",objectFit:'cover'}} src={data.image} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title" id="idtitcarta4" style={{fontFamily: 'Russo One',}}>{data.name}</h5>
                        <p className="card-text" id="iddescarta4">{data.description}</p>
                        <label><BiSolidCategory/> {data.category}</label>
                        <br/>
                        <label><BsFillCalendarDateFill/> {data.date}</label>                             
                        {/* <a href="#" className="btn btn-primary">boton</a>                 */}
                        <nav>
                            <Link to={`/details/${data._id}`} className="btn btn-primary"><AiFillEye/> Ver mas</Link>
                        </nav>
                    </div>                 
                </div>
                <br></br>
            </div>)        
        })
        }
        {/* Fin  llenado de la carta */}
        </div>        
        {/* Fin Grid*/}

        </>
    )
}
export default Cards