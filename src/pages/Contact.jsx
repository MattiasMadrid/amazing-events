import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BiSend } from "react-icons/bi";
import { useRef } from 'react';

const Contact = () =>{

    let nombre = useRef()
    let correo = useRef()
    let mensaje = useRef()

    function mostrarForm(){
        console.log(nombre.current.value,correo.current.value,mensaje.current.value)

    }




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
                      <p style={{fontFamily: 'Caprasimo',fontSize:'35px'}}>Contact</p>
                      </td>
                      <td width="10%" align="right">
                          <input type="button" className="btn btn-secondary btn-sm" value=">"/>
                      </td>
                  </tr>
                </tbody>
              </table>


        <center>
        <Form style={{ width: '20rem' }}>
            <Form.Group className="mb-3" controlId="formBasicNom">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Ingrese nombre" ref={nombre}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Ingrese correo" ref={correo}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicTextarea">
                <Form.Label>Mensaje</Form.Label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" ref={mensaje}></textarea>
            </Form.Group>
            <Button variant="primary" type="button" onClick={()=> mostrarForm()}>
                <BiSend/> Enviar
            </Button>
        </Form>
    </center>











            {/* <center>
                <form style={{width:'500px'}}>
                    <div>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input"/>
                        </div>
                        <div className="form-group">
                            <label>Mail</label>
                            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <input className="btn btn-dark" type="submit" value="Submit"/>
                    </div>                  
                </form>
            </center> */}





        </>
    )

}

export default Contact