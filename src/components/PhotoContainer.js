import React from 'react';
import PhotoItem from '../components/PhotoItem';
import NotFound from '../components/NotFound';

// A wrapper that holds all photo items
// data is passed as a prop
const PhotoContainer = ({ data, title }) => {
    // Declare empty array
    let photos = [];
    // Store the photo data in photoList
    const photosList = data.photo;
    // first check if photoList is not undefined or empty
    if (photosList !== undefined && photosList.length > 0) {
        // then map over the list to create PhotoItems which hold a url to show the photo
        // the url is passed to the PhotoItem as a prop
        // Because this Component is created in iteration it needs to have a unique key which is a photo.id
        photos = photosList.map(photo =>
            <PhotoItem url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`} key={photo.id} />
        )
    } else {
        // else show the not found template
        photos = <NotFound wasSearch={title} />
    }

    return (
        <div className="photo-container">
            <h2>{title}</h2>
            <ul>
                {/* has all photoitems or the not found template */}
                {photos}
            </ul>
        </div>
    )
}

export default PhotoContainer;