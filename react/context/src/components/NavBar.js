import React, {useContext} from "react";
import {Link} from "react-router-dom";
import ColorContext from "../contexts/ColorContext";

const NavBar = (props) => {
    const {setThemeColor} = useContext(ColorContext);

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="#">Color site!</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/cards">Cards</Link>
                    </li>
                </ul>
                <div className="d-flex">
                    <input className="form-control form-control-color me-2" type="color" aria-label="Search" onChange={(event)=>setThemeColor(event.target.value)}/>
                </div>
                </div>
            </div>
            </nav>
    )
}

export default NavBar;