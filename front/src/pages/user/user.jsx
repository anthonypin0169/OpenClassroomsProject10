import { useSelector } from 'react-redux'
import { useState } from 'react'
import ChangeUsername from '../../components/changeUsername/changeUsername'
import AccountContent from '../../components/accountContent/accountContent'
import "./user.scss"

export default function User () {
    const user = useSelector((state) => state.user.profile)
    const [isEditing, setIsEditing] = useState(false)


    return(
        <main className="user bg-dark">
            {isEditing ? (
                <div className="user__header">
                    <h1 className="user__header--title">Edit user info</h1>
                    <ChangeUsername onCancel={() => setIsEditing(false)} />
            </div> 
            ) : 
            ( 
            <div className="user__header">
                <h1 className="user__header--title">Welcome back<br />{user?.firstName || 'User'} {user?.lastName}!</h1>
                <button className="user__header--logout-button" onClick={() => setIsEditing(true)}>Edit Name</button>
            </div>
            )}

            <h2 className="sr-only">Accounts</h2>
            <AccountContent title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance" />
            <AccountContent title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" />
            <AccountContent title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance" />
        </main>
    )
}
