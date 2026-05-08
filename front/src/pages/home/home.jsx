import "./home.scss"
import iconChat from "../../assets/icon-chat.png"
import iconMoney from "../../assets/icon-money.png"
import iconSecurity from "../../assets/icon-security.png"
import FeatureItems from "../../components/featuresItems/featuresItems"

export default function Home () {
    return(
        <main>
            <div className="hero">
                <section className="hero__content">
                    <p className="hero__content--subtitle">No fees.</p>
                    <p className="hero__content--subtitle">No minimum deposit.</p>
                    <p className="hero__content--subtitle">High interest rates.</p>
                    <p className="hero__content--text">Open a savings account with Argent Bank today!</p>
                </section>
            </div>

            <section className="features">
                <h2 className="sr-only">Features</h2>

                <FeatureItems pics={iconChat} alt="Chat icon" title="You are our #1 priority" text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes." />

                <FeatureItems pics={iconMoney} alt="Money icon" title="More savings means higher rates" text="The more you save with us, the higher your interest rate will be!" />

                <FeatureItems pics={iconSecurity} alt="Security icon" title="Security you can trust" text="We use top of the line encryption to make sure your data and money is always safe." />
            </section>
        </main>
    )
}