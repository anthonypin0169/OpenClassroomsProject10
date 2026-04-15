import "./header.scss"
import {NavLink} from "react-router-dom"

export default function Header () {
    return(
         <nav className="main-nav">
            <NavLink to="/" className="main-nav__logo">
                <img
                className="main-nav__logo--image"
                src="../assets/argentBankLogo.png"
                alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <div>
                <NavLink to="/login" className="main-nav__logo">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </NavLink>
            </div>
        </nav>
    )
}