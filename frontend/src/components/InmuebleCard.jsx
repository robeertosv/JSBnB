import '../styles/inmuebleCardContainer.scss'


const InmuebleCard = ({ id, title, price, description, review, services }) => {

    const handler = () => {
        window.location.replace(`/book?id=${id}`)
    }
    return (
        <div className="inmuebleCardContainer">
            <div className="cardLeft">
                <h1>{title}</h1>
                <h3>{description}</h3>
                <div className='cardServicesList'>{
                    services.map((item, idx) => (<p key={idx}>- {item}&nbsp;</p>))
                }</div>
            </div>

            <div className="cardRight">
                <h1>{price}€</h1>
                <h2>Review: {review == undefined ? 0 : review}/5</h2>

                <button onClick={handler}>View More</button>
            </div>
        </div>
    )
}

export default InmuebleCard