import React from 'react';
import { NavLink } from 'react-router-dom';

// Because of these links I wanted that /search/:searchParam route triggers a search
// So I created that and simply can link to it to fetch new data
// Now this component does not have to push data around
const MainNav = () => {
    return (
        <nav className="main-nav">
          <ul>
            <li><NavLink exact to='/search/computers'>Computers</NavLink></li>
            <li><NavLink to='/search/cats'>Cats</NavLink></li>
            {/* I only added this link because the steps in the documentation asked for it, it actually has no real use as the search field is always there */}
            <li><NavLink exact className="search-link" to='/search'>Search</NavLink></li>
            <li><NavLink to='/search/dogs'>Dogs</NavLink></li>
            <li><NavLink to='/search/racecar'>Racecars</NavLink></li>
          </ul>
        </nav>
    )
}

export default MainNav;