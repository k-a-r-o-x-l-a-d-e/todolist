import React from "react";
import '../App.css'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
function NavBar(){
    return(
        <div className="nav_bar">
        <span >
        <Link to="/" className="nav_bar_opts">HOME</Link>
        </span>
        <span>
        <Link to="/About" className="nav_bar_opts">About</Link>
        </span>
        <span >
        <Link to="/Enquire" className="nav_bar_opts">Enquire</Link>
        </span>
        <span >
        <Link to="/Todoui" className="nav_bar_opts">TODO lists</Link>
        </span>
        </div>
    )
}
export default NavBar