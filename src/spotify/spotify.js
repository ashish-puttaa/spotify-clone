export const authEndpoint = 'https://accounts.spotify.com/authorize';

const redirectUri = 'http://localhost:3000/';
const clientId = '3a8f6cfd335e41eebad37d6d6d3a3b4d';

const scopes = [
   'user-read-currently-playing',
   'user-read-recently-played',
   'user-read-playback-state',
   'user-top-read',
   'user-modify-playback-state',
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
   '%20'
)}&response_type=token&show_dialog=true`;

export const getTokenFromUrl = () =>
   window.location.hash
      .substring(1)
      .split('&')
      .reduce((initial, item) => {
         let [key, value] = item.split('=');
         initial[key] = decodeURIComponent(value);
         return initial;
      }, {});
