import { useEffect, useState } from 'react';
import Header from '../components/Header'
import InmueblesPreview from '../components/InmueblesPreview';
import query from '../../utils/query'

const Home = () => {
    //const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState('price');
    const [inmueblesPreview, setInmueblesPreview] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [isAnfitrion, setIsAnfitrion] = useState(false);

    const searchHandler = async (e) => {
        setIsAnfitrion(false);

        query('http://localhost/api/db/getInmueblesPreview', { searchQuery: e, filter })
            .then(inmueble => {
                setCurrentPage(inmueble.currentPage + 1);
                setTotalPages(inmueble.totalPages);
                setInmueblesPreview(inmueble.inmuebles);
            });
    }

    useEffect(() => {

        setIsAnfitrion(false);
        query('http://localhost/api/db/getInmueblesPreview', { searchQuery: '', filter })
            .then(inmueble => {
                setCurrentPage(inmueble.currentPage + 1);
                setTotalPages(inmueble.totalPages);
                setInmueblesPreview(inmueble.inmuebles);

            });
    }, [])


    return (
        <div>
            <Header isAnfitrion={isAnfitrion} onSearch={searchHandler} onFilterChange={setFilter} />
            <InmueblesPreview inmueblesPreview={inmueblesPreview} />
        </div>
    );
}

export default Home;