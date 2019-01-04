import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import apiKey from './config';
import './App.css';

import MainNav from './components/MainNav'
import SearchFrom from './components/SearchForm';
import PhotoContainer from './components/PhotoContainer';
import FourOFourPage from './components/404Page';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      title: '',
      loading: false,
      fourOFourState: false
    }
  }

  getData = (search) => {
    // Set the api key
    const key = apiKey;

    // set loading to true
    // add search to state so I can use it as title
    this.setState({
      loading: true,
      title: search
    })

    // Build the search url
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${search}&page=1&per_page=24&format=json&nojsoncallback=1`;
    
    // I used a try and catch block to catch network/url errors
    try {
      // use axios and pass it the url
      // If the respons is a succes update the photos state
      axios.get(url).then(resp => {
        const photos = resp.data.photos;
        this.setState({
          photos,
          loading: false,
        })
      })
      // else catch an error and log it
      .catch((error) => {
        console.log('There was an error fetching photos:', error);
        this.setState({
          loading: false,
        })
      })
    } catch(error) {
      console.log('Something is wrong with the requested url:', error);
      this.setState({
        loading: false,
      })
    }
  }

  // get called by the FourOFourPage
  // receives a boolean and sets that to state
  set404Sate = (state) => {
    this.setState({
      loading: false,
      fourOFourState: state
    })
  }

  // I wanted a search to trigger on form input and on route params
  // So I've been digging around on stack to find a solution to
  // rendering Customs props AND the routerprops
  // Also I needed to trigger an component update when the router param changed.
  // these where the solutions I implementend and they are all in the route: "/search/:searchParam":
  // https://stackoverflow.com/questions/39871662/passing-props-to-component-in-react-router-4
  // https://stackoverflow.com/questions/32261441/component-does-not-remount-when-route-parameters-change

  render() {
    const isLoading = this.state.loading;
    const is404State = this.state.fourOFourState;
    let loadingBlock;

    if (isLoading) {
      // Show loading text
      loadingBlock = 'Loading...';
    } else if (is404State) {
      // show nothing
      loadingBlock = '';
    } else {
      // show photos
      loadingBlock = <PhotoContainer data={this.state.photos} title={ this.state.title }/>;
    }

    return (
      // use BrowserRouter
      <BrowserRouter>

        {/* Route/Component wrapper */}
        <div className="App">

          {/* Add Switch to enable a 404 route */}
          <Switch>

              {/* SearchForm with getData function as prop, shown on home route */}
              <Route exact path="/" render={ () => <SearchFrom getSearch={this.getData} />} />

              {/* SearchForm with getData function as prop, shown on /search route */}
              <Route exact path="/search/" render={ () => <SearchFrom getSearch={this.getData} />} />
              
              {/* 
                  Searchfrom with getData function as prop including the default Routerprops passed via object destructuring 
                  and a key based on the window.location.href so it updates when the route changes
                  Shown only on the search with param route and further
              */}
              <Route exact path="/search/:searchParam" render={ (RouterProps) => <SearchFrom getSearch={this.getData} {...RouterProps} key={window.location.href} /> } />
              
              {/* Add a 404 route that also updates state via set404Sate so the whole app knows the user is on a 404 */}
              <Route render={ () => <FourOFourPage signal404={this.set404Sate} /> } />
            </Switch>

            {/* MainNav, shown on all routes */}          
            <Route path="/" component={ () => <MainNav />} />
            
            {/* loadingBlock is a string or PhotoContainer which receives the photo data as props shown on all routes*/}
            {loadingBlock}
        </div>
      </BrowserRouter>
    );
  }
}
