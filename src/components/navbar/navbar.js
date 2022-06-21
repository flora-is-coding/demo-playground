import { Routes, Route, Link } from 'react-router-dom';
import './navbar.css';

export default function NavBar () {
    return (
        <div className="navbar">
            <nav className="navbar__container">
                <Link to='/'>Home</Link>
                <Link to='/counter'>Counter</Link>
                <Link to='/randomAPI'>RandomAPI</Link>
                <Link to='/palindrome'>Palindrome</Link>
                <Link to='/card'>Card</Link>
            </nav>
        </div>
    )
}