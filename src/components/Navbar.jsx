import React from 'react';
import { NavLink, replace, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const navItems = [
        { id: 1, label: 'Home', linkTo: '/'},
        { id: 2, label: 'About', linkTo: '/about'},
        { id: 3, label: 'Products', linkTo: '/products'},
        { id: 4, label: 'Contact', linkTo: '/contact'},
        { id: 5, label: 'Career', linkTo: '/jobs'}
    ]
    const navigate = useNavigate();

    return (
        <nav>
            <img src="/logo.svg" alt="brand logo" className='brand-logo' onClick={() => navigate('/')}/>
            <ul className='nav-items'>
                { navItems.map(item => (
                    <NavLink to={item.linkTo} key={item.id}><li>{item.label}</li></NavLink>
                )) }
            </ul>
            <button onClick={() => navigate('/about', {replace: true})}>Get started</button>
        </nav>
    )
}

export default Navbar