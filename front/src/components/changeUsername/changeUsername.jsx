import { useDispatch } from 'react-redux'
import { updateUser } from '../../store/userSlice'
import "./changeUsername.scss"

export default function ChangeUsername ({onCancel, profile}) {
    const dispatch = useDispatch()
    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(updateUser({
            userName: event.target.userName.value
        }))
    onCancel()
}
    return(
        <form className="userForm" onSubmit={handleSubmit}>
            <div className="userForm__wrapper">
                    <label className="userForm__wrapper--label" htmlFor="userName">User name : </label>
                    <input className="userForm__wrapper--input"
                    defaultValue={profile?.userName}
                    type="text"
                    id="userName"
                    name="userName"
                    required
                    aria-required="true"
                    />
            </div>
            <div className="userForm__wrapper">
                    <label className="userForm__wrapper--label" htmlFor="firstName">First name : </label>
                    <input className="userForm__wrapper--input disabled-input"
                    defaultValue={profile?.firstName} disabled
                    type="text"
                    id="firstName"
                    name="firstName"
                    aria-required="true"
                    />
            </div>
            <div className="userForm__wrapper">
                    <label className="userForm__wrapper--label" htmlFor="lastName">Last name : </label>
                    <input className="userForm__wrapper--input disabled-input"
                    defaultValue={profile?.lastName} disabled
                    type="text"
                    id="lastName"
                    name="lastName"
                    aria-required="true"
                    />
            </div>
            <div className="userForm__buttons">
                <button className="userForm__buttons--modify-button"
                type="submit">Save</button>
                <button className="userForm__buttons--modify-button"
                type="button" onClick={onCancel}>Cancel</button>
            </div>
        </form>
    )
}