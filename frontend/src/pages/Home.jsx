/*import Header from '../components/Header'
import InmueblesPreview from '../components/InmueblesPreview'

const Home = () => {
  return (
    <div className='container'>
        <Header/>
        <InmueblesPreview />
    </div>
  )
}

export default Home*/

// App.jsx
import { useState } from 'react';
import Header from '../components/Header'
import InmueblesPreview from '../components/InmueblesPreview';

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState('');
    const [inmueblesPreview, setInmueblesPreview] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [isAnfitrion, setIsAnfitrion] = useState(false);

    const fetchInmuebles = (query, filter) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let data = { query, filter };
        let body = JSON.stringify(data);
        let options = { headers, body, method: 'POST', redirect: 'follow' };

        fetch('http://localhost/api/db/getInmueblesPreview', options)
            .then(response => response.json())
            .then(inmueble => {
                setCurrentPage(inmueble.currentPage + 1);
                setTotalPages(inmueble.totalPages);
                setInmueblesPreview(inmueble.inmueblesReview);
                console.log('Here')
            });
    };

    fetchInmuebles()

    return (
        <div>
            <Header isAnfitrion={isAnfitrion} onSearch={setSearchQuery} onFilterChange={setFilter} fetchInmuebles={fetchInmuebles} />
            <InmueblesPreview inmueblesPreview={inmueblesPreview} />
        </div>
    );
}

export default Home;