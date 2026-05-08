export default function AccountContent ({title, amount, description}){
    return(
        <section className="user__account">
            <div className="user__account--content">
                <h3 className="user__account--title">{title}</h3>
                <p className="user__account--amount">{amount}</p>
                <p className="user__account--description">{description}</p>
            </div>
            <div className="user__account-actions">
                <button className="user__account-actions--transaction-button">View transactions</button>
            </div>
        </section>
    )
}