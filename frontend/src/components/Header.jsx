import '../styles/header.scss'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useEffect, useState } from 'react';

const Header = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [isAnfitrion, setIsAnfitrion] = useState(false);
    const toggleMenu = () => setIsVisible(!isVisible)

    useEffect(() => {
        fetch('http://localhost/api/profile/getUserPic').then((res) => {
            res.text().then((url) => {
                let profile = document.querySelector('.headerProfileImage')
                profile.innerHTML = ''

                let profileImg = document.createElement('img')
                profileImg.classList.add('headerProfileImg')
                profileImg.src = url

                profile.appendChild(profileImg)
            })
        })

        fetch('http://localhost/api/profile/getAccountType').then(res => {
            res.text().then(type => {
                type == 'anfitrion' ? setIsAnfitrion(true) : setIsAnfitrion(false)
            })
        })
    }, [])

    return (
        <div className='headerContainer darkTheme'>
            <h1 className="appName">JsBnB</h1>
            <div className="headerSearch">
                <div className="headerSearchbar">
                    <input type="text" placeholder='Search Anything' />
                    <button><FaMagnifyingGlass id='lupaIcon' /></button>
                </div>
                <div className="searchFilters">
                    <select id="searchFilters">
                        <option value="price">Price</option>
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