import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
import AccountContent from '../../components/accountContent/accountContent'
import "./user.scss"

export default function User () {
    const { user } = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    const handleLogout = () => {
        localStorage.removeItem('token')
        dispatch(logout())
    }

    return(
        <main className="user bg-dark">
            <div className="user__header">
                <h1 className="user__header--title">Welcome back<br />{user?.firstName || 'User'} {user?.lastName}!</h1>
                <button className="user__header--logout-button" onClick={handleLogout}>Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>

            <AccountContent title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance" />
            
            <AccountContent title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" />
            
            <AccountContent title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance" />
            
        </main>
    )
}
