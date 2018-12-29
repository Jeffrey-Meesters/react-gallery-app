import React, { Component } from 'react';
import './App.css';

import MainNav from './components/MainNav'
import SearchFrom from './components/SearchForm';
import PhotoContainer from './components/PhotoContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchFrom />
        <MainNav />
        <PhotoContainer />
      </div>
    );
  }
}

export default App;
