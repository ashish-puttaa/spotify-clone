import React, { useEffect } from 'react';
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
      (async () => {
         const hash = getTokenFromUrl();
         window.location.hash = '';
         const _token = hash.access_token;

         if (_token) {
            dispatch({ type: 'SET_TOKEN', payload: _token });
            spotify.setAccessToken(_token);

            const userData = await spotify.getMe();
            dispatch({ type: 'SET_USER', payload: userData });

            const playlists = await spotify.getUserPlaylists();
            dispatch({ type: 'SET_PLAYLISTS', payload: playlists });

            const playlist = await spotify.getPlaylist('37i9dQZF1DWSqmBTGDYngZ');
            dispatch({ type: 'SET_DISCOVER_WEEKLY', payload: playlist });
         }
      })();
   }, []);

   return <div className="App">{token ? <Player spotify={spotify} /> : <Login />}</div>;
}

export default App;
