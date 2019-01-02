import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';
import apiKey from './config';
import './App.css';

import MainNav from './components/MainNav'
import SearchFrom from './components/SearchForm';
import PhotoContainer from './components/PhotoContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: []
    }
  }

  getData = (search) => {
    // If there is a search param then us it else use a predefined array
    const searchTag = search ||  ['donut', 'treehouse'];
    const key = apiKey;
    // Build the search url
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${searchTag}&page=1&per_page=24&format=json&nojsoncallback=1`;
    
    // I used a try and catch block to catch network/url errors
    try {
      // use axios and pass it the url
      // If the respons is a succes update the photos state
      axios.get(url).then(resp => {
        const photos = resp.data.photos;
        this.setState({
          photos,
        })
      })
      // else catch an error and log it
      .catch((error) => {
        console.log('There was an error fetching photos:', error);
      })
    } catch(error) {
      console.log('Something is wrong with the requested url:', error);
    }
  }

  // When the app component first mounts get photo data
  componentDidMount() {
    this.getData();
  }

  // I wanted a search to trigger on form input and on route params
  // So I've been digging around on stack to find a solution to
  // rendering Customs props and the routerprops
  // Also I needed to trigger an component update when the router param changed.
  // these where the solutions I implementend and they are all in the route: "/search/:searchParam":
  // https://stackoverflow.com/questions/39871662/passing-props-to-component-in-react-router-4
  // https://stackoverflow.com/questions/32261441/component-does-not-remount-when-route-parameters-change

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/search" render={ () => <SearchFrom getSearch={this.getData} /> } />
          <Route path="/search/:searchParam" render={ (RouterProps) => <SearchFrom getSearch={this.getData} {...RouterProps} key={window.location.href} /> } />
          <Route path="/" component={ MainNav } />
          <Route path="/" render={ () => <PhotoContainer data={this.state.photos} />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
