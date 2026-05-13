import "./header.scss"
import { NavLink, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logout } from "../../store/authSlice"
import logo from "../../assets/argentBankLogo.png"

export default function Header() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isAuthenticated } = useSelector((state) => state.auth)
    const user = useSelector((state) => state.user.profile)

    const handleLogout = () => {
        localStorage.removeItem('token')
        dispatch(logout())
        navigate('/')
    }

    return (
        <nav className="main-nav">
            <NavLink to="/" className="main-nav__logo">
                <img
                    className="main-nav__logo--image"
                    src={logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <div>
                {isAuthenticated ? (
                    <>
                        <span className="main-nav__item">
                            <i className="fa fa-user-circle"></i>
                            {user?.firstName}
                        </span>
                        <button className="main-nav__item" onClick={handleLogout}>
                            <i className="fa fa-sign-out"></i>
                            Sign Out
                        </button>
                    </>
                ) : (
                    <NavLink to="/login" className="main-nav__item">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </NavLink>
                )}
            </div>
        </nav>
    )
}
