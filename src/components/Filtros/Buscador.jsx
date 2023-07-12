import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useRef } from 'react';

function Buscador(props) {
    let inputRef = useRef()
 
    return(  
        <>
            <Form className="d-flex" style={{marginLeft: '2rem'}}>
                <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" ref={inputRef} />
                <Button variant="outline-success" onClick={() => props.filtrarEventos(inputRef.current.value)}>Search</Button>
            </Form>
        </>
    )
}

export default Buscador