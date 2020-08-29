import React, { useState, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

import Login from './components/login/login.component';
import Player from './components/player/player.component';
import { getTokenFromUrl } from './spotify/spotify';
import { useProviderState } from './context/state-provider';

import './App.css';

const spotify = new SpotifyWebApi();

function App() {
   const [{ user, token }, dispatch] = useProviderState();

   useEffect(() => {
      const hash = getTokenFromUrl();
      window.location.hash = '';
      const _token = hash.access_token;

      if (_token) {
         dispatch({ type: 'SET_TOKEN', payload: _token });
         spotify.setAccessToken(_token);

         spotify.getMe().then((user) => {
            dispatch({ type: 'SET_USER', payload: user });
         });

         spotify
            .getUserPlaylists()
            .then((playlists) => dispatch({ type: 'SET_PLAYLISTS', payload: playlists }));
      }
   }, []);

   return <div className="App">{token ? <Player spotify={spotify} /> : <Login />}</div>;
}

export default App;
