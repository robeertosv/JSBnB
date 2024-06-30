import '../styles/header.scss'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import query from '../../utils/query'

const Header = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [isAnfitrion, setIsAnfitrion] = useState(false);
    const [filter, setFilter] = useState('price')

    const changeFilter = (e) => setFilter(e.target.value)
    const toggleMenu = () => setIsVisible(!isVisible)

    const search = (e) => {
        const searchQuery = e.target.value

        /*
        TODO: implement search engine
        */
    }

    useEffect(() => {
        fetch('http://localhost/api/profile/getUserPic').then((res) => {
            res.blob().then((blob) => {
                let profile = document.querySelector('.headerProfileImage')
                profile.innerHTML = ''
                const url = URL.createObjectURL(blob)

                let profileImg = document.createElement('img')
                profileImg.classList.add('headerProfileImg')
                profileImg.src = `${url}`

                profile.appendChild(profileImg)
            })
        })

        query('http://localhost/api/profile/getAccountType', { uid: 1 }).then(res => {
                res.type == 'anfitrion' ? setIsAnfitrion(true) : setIsAnfitrion(false)
        })
    }, [])

    return (
        <div className='headerContainer darkTheme'>
            <h1 className="appName">JsBnB</h1>
            <div className="headerSearch">
                <div className="headerSearchbar">
                    <input type="text" placeholder='Search Anything' onChange={search} />
                    <button><FaMagnifyingGlass id='lupaIcon' /></button>
                </div>
                <div className="searchFilters">
                    <select id="searchFilters" onChange={changeFilter}>
                        <option value="price" >Price</option>
                        <option value="reviews">Reviews</option>
                        <option value="city">City</option>
                        <option value="super">SuperAdmins</option>
                    </select>
                </div>
            </div>
            <div className="headerProfile">
                <div className="headerProfileImage" onClick={toggleMenu}>

                </div>

                {isVisible && (
                    <div className="dropdown-content">
                        {/* Paso 2: Estructura del menú */}
                        <a href="#">{isAnfitrion ? 'Mis reservas' : 'Mis inmuebles'}</a>
                        <a href="#">Settings</a>
                        <a href="#">Log out</a>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Header