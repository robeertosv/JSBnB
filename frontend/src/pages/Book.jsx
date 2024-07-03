import '../styles/book.scss'

import { useEffect, useState } from 'react';

const Book = () => {

    const [fechaEntrada, setFechaEntrada] = useState();
    const [fechaSalida, setFechaSalida] = useState();
    const [inmueble, setInmueble] = useState({})
    const [anfitrion, setAnfitrion] = useState('')



    useEffect(() => {
        let headers = new Headers(); headers.append('Content-Type', 'application/json')

        const url = window.location.search
        const params = new URLSearchParams(url)
        const id = params.get('id')

        let body = JSON.stringify({ id: id.valueOf() })

        let options = { headers, body, method: 'POST', redirect: 'follow' }


        fetch('http://localhost/api/db/getInmueble', options).then((response) => {
            response.json().then(e => {
                setInmueble(e)

                headers = new Headers(); headers.append('Content-Type', 'application/json')
                body = JSON.stringify({ UID: e.ownerId })
                options = { headers, body, method: 'POST', redirect: 'follow' }
                console.log(body)

                fetch('http://localhost/api/profile/getUserById', options).then((res) => {
                    res.json().then(user => {
                        setAnfitrion(user.user.fullname)
                    })
                })
            })

        })



    }, [])

    const reservaHandler = async () => {

    }

    return (
        <div className='bookContainer'>
            <h1 id='bookTitle'>Reserva esta propiedad</h1>
            <div className="bookForm">
                <div className="basicInfo">
                    <h1>{inmueble.title}</h1>
                    <h2>Dirección: <p>{inmueble.address}</p></h2>
                    <h2>Descripción: <p>{inmueble.description}</p></h2>
                </div>

                <div className="photo">
                    <img src={inmueble.photo} alt="" />
                    <h1>Review: <h2>{inmueble.review}/5</h2></h1>
                </div>

                <div className="moreInfo">
                    <h1>Anfitrion: <p>{anfitrion}</p></h1>
                    <h2>Tipo: {inmueble.esApartamento ? 'Apartamento' : "Casa"}</h2>
                    <h2>Max Pax: {inmueble.maxPeople}</h2>
                    <h2>Precio/pax/noche: {inmueble.price}€</h2>
                    <ul>{
                        inmueble.services.map((item, idx) => {
                            return(<li key={idx} >{item}</li>)                            
                        })
                    }</ul>
                </div>

                <div className="booking">
                    <div className="fechas">
                        <div>
                            <label htmlFor="fechaEntrada">Fecha Entrada</label>
                            <input type="date" name='fechaEntrada' onChange={setFechaEntrada} />
                        </div>
                        <div>
                            <label htmlFor="fechaSalida">Fecha Salida</label>
                            <input type="date" name="fechaSalida" onChange={setFechaSalida} />
                        </div>
                    </div>
                    <h1>Total: 20€</h1>
                    <button onClick={reservaHandler}>RESERVAR</button>
                </div>
            </div>
        </div>
    )
}

export default Book