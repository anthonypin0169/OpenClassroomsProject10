import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
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
                <h1 className="user__header--title">Welcome back<br />{user?.firstName || 'User'}!</h1>
                <button className="user__header--logout-button" onClick={handleLogout}>Logout</button>
            </div>
            <h2 className="sr-only">Accounts</h2>

            <section className="user__account">
                <div className="user__account--content">
                    <h3 className="user__account--title">Argent Bank Checking (x8349)</h3>
                    <p className="user__account--amount">$2,082.79</p>
                    <p className="user__account--description">Available Balance</p>
                </div>
                <div className="user__account-actions">
                    <button className="user__account-actions--transaction-button">View transactions</button>
                </div>
            </section>

            <section className="user__account">
                <div className="user__account--content">
                    <h3 className="user__account--title">Argent Bank Savings (x6712)</h3>
                    <p className="user__account--amount">$10,928.42</p>
                    <p className="user__account--description">Available Balance</p>
                </div>
                <div className="user__account-actions">
                    <button className="user__account-actions--transaction-button">View transactions</button>
                </div>
            </section>

            <section className="user__account">
                <div className="user__account--content">
                    <h3 className="user__account--title">Argent Bank Credit Card (x8349)</h3>
                    <p className="user__account--amount">$184.30</p>
                    <p className="user__account--description">Current Balance</p>
                </div>
                <div className="user__account-actions">
                    <button className="user__account-actions--transaction-button">View transactions</button>
                </div>
            </section>
        </main>
    )
}
