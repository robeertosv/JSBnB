import '../styles/header.scss'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useEffect } from 'react';

const Header = () => {

    useEffect(() => {
        fetch('http://localhost/api/profile/getUserPic').then((res) => {
            res.text().then((url) => {
                let profile = document.querySelector('.headerProfile')
                profile.innerHTML = ''
                
                let profileImg = document.createElement('img')
                profileImg.classList.add('headerProfileImg')
                profileImg.src = url

                profile.appendChild(profileImg)
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
                Loading...
            </div>
        </div>
    )
}

export default Header