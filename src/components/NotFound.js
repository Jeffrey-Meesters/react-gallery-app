import React from 'react';

const NotFound = ({ wasSearch }) => {
    return (
        <li className="not-found">
            <h3>No Results Found</h3>
            <p>Your search for <i>"{wasSearch}"</i> did not return any results. Please try again.</p>
        </li>
    )
}

export default NotFound;