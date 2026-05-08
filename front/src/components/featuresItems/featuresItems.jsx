export default function FeatureItems ({pics, alt, title, text}){
    return(
        <div className="features__item">
            <img
                src={pics}
                alt={alt}
                className="features__item--icon"
                />
            <h3 className="features__item--title">{title}</h3>
            <p className="features__item--text">{text}</p>
        </div>
    )
}