import React from 'react';

const PhotoItem = ({ url }) => {
    return (
        <li>
            <img src={url} alt="" />
        </li>
    )
}

export default PhotoItem;