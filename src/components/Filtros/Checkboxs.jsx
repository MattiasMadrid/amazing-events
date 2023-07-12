import { useEffect, useState } from "react"
import { BiTestTube } from "react-icons/bi"

const Checkboxs = (props) =>{
    let eventos = props.eventos
    let categorias = []
    let namesCategoriasChecked = []

    eventos.forEach((evento) => {
         if (!categorias.includes(evento.category)) {
             categorias.push(evento.category)
         }
    })

    const handleChange = event => {
        let checkboxesChecked = document.querySelectorAll("input[type=checkbox]:checked")
        let arrCheckboxesChecked = Array.from(checkboxesChecked)
        namesCategoriasChecked = arrCheckboxesChecked.map((checkbox) => checkbox.value)
        props.filtrarCategorias(namesCategoriasChecked)
      };
    return(    
        <>
            {/* Grid checkbox para que salga hacia el lado */}
            <div className="row" id="checkboxes">  
        {/* Logica checkbox dinamico */}
        {     
        
    
            categorias.map((categoria)=>{
                return (
                    <center key={categoria}>     
                                <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" value={categoria} id={categoria} onClick={handleChange}/>
                                    <label className="form-check-label">
                                        {categoria}
                                    </label>
                                </div>
                    </center>
                )         
            })
            
        }
        {/* Fin logica checkbox */}
            </div>
        {/* Fin grid checkbox*/}

        </>
    )

}

export default Checkboxs