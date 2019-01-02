import React from 'react';
import PhotoItem from '../components/PhotoItem';
import NotFound from '../components/NotFound';

// A wrapper that holds all photo items
const PhotoContainer = ({ data }) => {
    let photos = [];
    const photosList = data.photo;
    // first check if photoList is not undefined or empty
    if (photosList !== undefined && photosList.length > 0) {
        // then map over the list to create PhotoItems which hild a url to show the photo
        photos = photosList.map(photo =>
            <PhotoItem url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`} key={photo.id} />
        )
    } else {
        // else show the not found template
        photos = <NotFound />
    }

    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                {/* has all photoitems or the not found template */}
                {photos}
            </ul>
        </div>
    )
}

export default PhotoContainer;