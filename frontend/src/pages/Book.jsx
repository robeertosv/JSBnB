import '../styles/book.scss'
import query from '../../utils/query'
import { createElement, useEffect, useState } from 'react';

const Book = () => {

    const [fechaEntrada, setFechaEntrada] = useState();
    const [fechaSalida, setFechaSalida] = useState();
    const [personas, setPersonas] = useState(0)
    const [precio, setPrecio] = useState(0)
    const [inmueble, setInmueble] = useState({})
    const [img, setImg] = useState();
    const [services, setServices] = useState([])
    const [anfitrion, setAnfitrion] = useState('')
    const [loggedUser, setLoggedUser] = useState()
    const [isVIP, setIsVIP] = useState(false)


    useEffect(() => {
        const url = window.location.search
        const params = new URLSearchParams(url)
        const id = params.get('id')

        query('http://localhost/api/auth/validateAuth').then((user) => {setLoggedUser(user.user._id); setIsVIP(user.user.isVIP)})
        query('http://localhost/api/db/getInmueble', { id: id.valueOf() }).then((e) => {
            setInmueble(e)

            let lista = '';
            lista = e.services[0]
            lista.toString()
            lista = lista.substring(1)
            lista = lista.substring(0, lista.length - 1)
            lista = lista.split(',')

            let newLista = []

            lista.forEach(item => {
                item = item.substring(1)
                item = item.substring(0, item.length - 1)
                newLista.push(item)
            })

            setServices(newLista)

            query('http://localhost/api/profile/getUserById', { UID: e.ownerId }).then((user) => {
                setAnfitrion(user.user.fullname)
            })
            

            let headers = new Headers(); headers.append('Content-Type', 'application/json'); let data = { id: id.valueOf() }; let body = JSON.stringify(data)
            let options = { headers, body, method: 'POST', redirect: 'follow' }
            fetch('http://localhost/api/db/getPhoto', options).then((res) => {
                res.blob().then(img => {
                    const url = URL.createObjectURL(img)
                    
                    setImg(url)
                })
            })
        })
    }, [])

    const setFE = (e) => setFechaEntrada(e.target.value)
    const setFS = (e) => setFechaSalida(e.target.value)

    const reservaHandler = async () => {
        if(personas <= 0 || fechaEntrada == null || fechaSalida == null) return alert("Comprueba los datos de tu reserva")
        let hoy = new Date; let dia = hoy.toJSON().split('T')[0]
        if(dia > fechaEntrada || fechaEntrada > fechaSalida) return alert("Las fechas deben ser válidas")
        const inmuebleID = inmueble._id
        query('http://localhost/api/reservas/create', { fechaEntrada, fechaSalida, personas, inmuebleID, loggedUser })
        
    }

    const calcularPrecio = (e) => {
        setPersonas(e.target.value)
        setPrecio(e.target.value * inmueble.price)
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
                    <img src={img}/>
                    <h1>Review: <h2>{inmueble.review}/5</h2></h1>
                </div>

                <div className="moreInfo">
                    <h1>Anfitrion: <p>{anfitrion}</p></h1>
                    <h2>Tipo: {inmueble.esApartamento ? 'Apartamento' : "Casa"}</h2>
                    <h2>Max Pax: {inmueble.maxPeople}</h2>
                    <h2>Precio/pax/noche: {inmueble.price}€</h2>
                    <ul>{
                        services.map((item, idx) => {
                            return (<li key={idx}>{item}</li>)
                        })
                    }</ul>
                </div>

                <div className="booking">
                    <div className="fechas">
                        <div>
                            <label htmlFor="fechaEntrada">Fecha Entrada</label>
                            <input type="date" name='fechaEntrada' onChange={setFE} />
                        </div>
                        <div>
                            <label htmlFor="fechaSalida">Fecha Salida</label>
                            <input type="date" name="fechaSalida" onChange={setFS} />
                        </div>
                        <div>
                            <label htmlFor="personas">¿Cuántos sois?</label>
                            <input type="number" name='personas' onChange={calcularPrecio} />
                        </div>
                    </div>
                    <h1>Total: {isVIP ? precio*0.75 : precio}€</h1>
                    <button onClick={reservaHandler}>RESERVAR</button>
                </div>
            </div>
        </div>
    )
}

export default Book