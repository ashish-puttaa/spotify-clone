import React, { useState, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

import Login from './components/login/login.component';
import Player from './components/player/player.component';
import { getTokenFromUrl } from './spotify/spotify';

import './App.css';

const spotify = new SpotifyWebApi();

function App() {
   const [token, setToken] = useState('');

   useEffect(() => {
      const hash = getTokenFromUrl();
      window.location.hash = '';
      const _token = hash.access_token;

      if (_token) {
         setToken(_token);
         spotify.setAccessToken(_token);

         spotify.getMe().then((user) => console.log(user));
      }
   }, []);

   return <div className="App">{token ? <Player /> : <Login />}</div>;
}

export default App;
