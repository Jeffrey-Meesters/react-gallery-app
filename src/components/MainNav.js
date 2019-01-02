import React from 'react';
import { NavLink } from 'react-router-dom';

// Because of these links I wanted that /search/:searchParam route triggers a search
// So I created that and simply can link to it to fetch new data
const MainNav = () => {
    return (
        <nav className="main-nav">
          <ul>
            <li><NavLink exact to='/search/computers'>Computers</NavLink></li>
            <li><NavLink to='/search/cats'>Cats</NavLink></li>
            <li><NavLink to='/search/dogs'>Dogs</NavLink></li>
          </ul>
        </nav>
    )
}

export default MainNav;