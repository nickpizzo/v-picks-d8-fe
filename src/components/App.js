import React, { Component } from 'react';
import PicksWrap from './PicksWrap';

import config from '../config.js';

const DRUPAL_API_ROOT = `${config.base}/`;
const JSONAPI_ROOT = `${config.base}/jsonapi/`;
const CONTENT_TYPE = `picks`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Boolean value that the interface can use to toggle display for
      // authenticated and non authenticated users.
      appUserLoggedIn: true,
      // Value that stores responses from API requests.
      data: null,
      // If we have previously obtained a token and stored it in localStorage,
      // set it as the token for the state, otherwise, return null.
      token: localStorage.getItem('token') !== null ? JSON.parse(localStorage.getItem('token')) : null,
      // Username and password will be connected to a login form to allow users
      // to enter in their account information.
      username: 'testuser',
      password: 'app'
    };
  }

  componentWillMount() {
    // If there is an existing token, but it's expired, update it.
    if (this.state.token !== null && this.state.token.expirationDate > Date.now()) {
      localStorage.clear();
      this.getRefreshToken();
    }
  
    // If there is an existing token, use it to load node data.
    if (this.state.token !== null) {
      this.setState({'appUserLoggedIn': true});
      this.loadNodeData();
    }
  }
  
  buildHeader = () => {

  }

  getOauthToken = () => {
    
  }

  getRefreshToken = () => {
    
  }

  fetchOauthToken = () => {
    
  }
  
  refreshOauthToken = () => {
    
  }


  render() {
    return (
      <div>
        <PicksWrap/>
      </div>
    );
  }
}

// App.propTypes = {

// };

export default App;
