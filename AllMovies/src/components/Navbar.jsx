import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {BiCameraMovie, BiSearchAlt2} from 'react-icons/bi';

import './Navbar.css';

const Navbar = () => {
    const [Search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(!Search) return

        navigate(`/search?q=${Search}`);
        setSearch('');
    };

    return (
        <nav id="Navbar">
            <h2>
                <Link to='/'><BiCameraMovie/>All Movies</Link>
            </h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Search for a movie' 
                onChange={(e) => setSearch(e.target.value)} 
                value={Search}
                />
                <button type='submit'>
                    <BiSearchAlt2/>
                </button>
            </form>
        </nav>
    );
};

export default Navbar;