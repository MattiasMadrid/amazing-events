import React from "react"
import {Link} from "react-router-dom"
import { HiHome } from "react-icons/hi";




const Menu = () => {


    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#"/>
                <Link to={"/"} className="nav-link">
                    <img src="https://zeevector.com/wp-content/uploads/Amazon-Logo-White@zeevector.png" width="120" height="50" alt=""></img>
                </Link>     
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to={"/"} className="nav-link"><HiHome/> Home</Link>
                        </li>
                        <li className="nav-item active">
                        <Link to={"/Upcoming"} className="nav-link">Upcoming Events</Link>
                        </li>
                        <li className="nav-item active">
                        <Link to={"/Past"} className="nav-link">Past Events</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to={"/Contact"} className="nav-link">Contact</Link>
                        </li>
                        <li className="nav-item active">
                        <Link to={"/Stats"} className="nav-link">Stats</Link>
                        </li>
                    </ul>
                </div>
            </nav>

    
        <br/>
        </>
    )
}
export default Menu