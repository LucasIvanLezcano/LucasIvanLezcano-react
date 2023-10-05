import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <header>
        <h1>Kombat Store</h1>

        <nav>
            <ul>
                <li>Palas</li>
                <li>Ropa y Accesorios</li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar