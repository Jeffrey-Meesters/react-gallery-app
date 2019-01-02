import React from 'react';

const PhotoItem = (props) => {
    return (
        <li>
            <img src={props.url} alt="" />
        </li>
    )
}

export default PhotoItem;