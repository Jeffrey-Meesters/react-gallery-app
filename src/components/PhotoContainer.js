import React from 'react';
import PhotoItem from '../components/PhotoItem'
import NotFound from '../components/NotFound';

const PhotoContainer = () => {
    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                <PhotoItem />
                <NotFound />
            </ul>
        </div>
    )
}

export default PhotoContainer;