export default function ChangeUsername ({onCancel}) {
    return(
        <form action="" className="userForm">
            <div className="userForm__wrapper">
                    <label className="userForm__wrapper--label" htmlFor="userName">User name : </label>
                    <input className="userForm__wrapper--input"
                    type="text"
                    id="userName"
                    name="userName"
                    required
                    aria-required="true"
                    />
            </div>
            <div className="userForm__wrapper">
                    <label className="userForm__wrapper--label" htmlFor="firstName">First name : </label>
                    <input className="userForm__wrapper--input"
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    aria-required="true"
                    />
            </div>
            <div className="userForm__wrapper">
                    <label className="userForm__wrapper--label" htmlFor="lastName">Last name : </label>
                    <input className="userForm__wrapper--input"
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
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