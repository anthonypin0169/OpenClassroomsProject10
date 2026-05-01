import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../store/authSlice.jsx'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import "./sign-in.scss"

export function SignIn() { 
  const dispatch = useDispatch()
  const { isAuthenticated, isLoading, error } = useSelector((state) => state.auth)
  const navigate = useNavigate()
useEffect(() => {
  if(!isLoading && isAuthenticated){
    navigate("/profile")
  }
},[isAuthenticated, isLoading, navigate])

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const credentials = {
      email: e.target.email.value, 
      password: e.target.password.value
    }
    dispatch(loginUser(credentials))
  }
  
  return (
    <main className="main bg-dark">
      <form className="sign-in__content" onSubmit={handleSubmit}>
        <i className="fa fa-user-circle sign-in__icon"></i>
        <h1 className="sign-in__title">Sign In</h1>

        {error && <div className="sign-in__error">{error}</div>}

        <div className="sign-in__input-wrapper">
            <label className="sign-in__label" htmlFor="email">Username</label>
            <input
              className="sign-in__input"
              type="email"
              id="email"
              name="email"
              required
              aria-required="true"
              aria-describedby={error ? "email-error" : undefined}
            />
        </div>

        <div className="sign-in__input-wrapper">
            <label className="sign-in__label" htmlFor="password">Password</label>
            <input
              className="sign-in__input"
              type="password"
              id="password"
              name="password"
              required
              aria-required="true"
              minLength="6"
              aria-describedby={error ? "password-error" : undefined}
            />
        </div>

        <div className="sign-in__remember">
            <input className="sign-in__checkbox" type="checkbox" id="remember-me" />
            <label className="sign-in__remember-label" htmlFor="remember-me">Remember me</label>
        </div>

        <button
          className="sign-in__button"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? 'Chargement...' : 'Sign In'}
        </button>
      </form>
    </main>
  )
}

export default SignIn
