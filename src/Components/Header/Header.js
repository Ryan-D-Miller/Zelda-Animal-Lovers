import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return <header>
        <h1>Zelda Animal Lovers</h1>
        <nav>
            <Link className="link" to={'/'}>All Friends</Link>
            <Link className="link" to='/Met'>Met Friends</Link>
            <Link className="link" to='/UnMet'>UnMet Friends</Link>
        </nav>
    </header>
}

export default Header;