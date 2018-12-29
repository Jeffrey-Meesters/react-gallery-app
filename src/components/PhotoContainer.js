import React from 'react';
import PhotoItem from '../components/PhotoItem'

const PhotoContainer = () => {
    return (
        <div class="photo-container">
            <h2>Results</h2>
            <ul>
                <PhotoItem />
            </ul>
        </div>
    )
}

export default PhotoContainer;