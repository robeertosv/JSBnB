import '../styles/header.scss'
import { useState } from 'react';
import PropTypes from 'prop-types';

const Header = ({ isAnfitrion, onSearch, onFilterChange }) => {

    const [isVisible, setIsVisible] = useState(false);
     
    const toggleMenu = () => setIsVisible(!isVisible)

    /*const handleSearchChange = (event) => {
        onSearch(event.target.value);
    };*/

    const handleFilterChange = (event) => {
        onFilterChange(event.target.value);
    };

    const search = (event) => {
        onSearch(event.target.value)
    };

    return (
        <div className='headerContainer darkTheme'>
            <h1 className="appName">JsBnB</h1>
            <div className="headerSearch">
                <div className="headerSearchbar">
                    <input type="text" placeholder='Search Anything' onChange={search}/>
                    
                </div>
                <div className="searchFilters">
                    <select id="searchFilters" onChange={handleFilterChange}>
                        <option value="price" >Price</option>
                        <option value="reviews">Reviews</option>
                        <option value="city">City</option>
                        <option value="house">Houses</option>
                        <option value="flat">Flats</option>
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

Header.propTypes = {
    isAnfitrion: PropTypes.bool,
    onSearch: PropTypes.func,
    onFilterChange: PropTypes.func,
    fetchInmuebles: PropTypes.func,
    searchQuery: PropTypes.string,
    filter: PropTypes.string
};

export default Header

//fetchInmuebles, searchQuery, filter