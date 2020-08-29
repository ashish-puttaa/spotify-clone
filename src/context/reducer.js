export const initialState = {
   user: null,
   token:
      null ||
      'BQDyPXWbRbJ9H4twI6jAl2upn7sUku8kSo68hvBotg8YarNCypj0s5dYX0dUV8i4JGREP_B9C1nE0pkjbUmGuDLYZH8lrF3XTwvbYMTJC_j0TmD_vWtBEyTyjycjI7y3iXl8hB-Jx6tpD8hkWbklOPdw1OSnPmUxAaWn7TIQY6qEp8E3BMCi',
   playlists: [],
   playing: false,
   item: null,
};

const reducer = (state = initialState, action) => {
   console.log(action);

   switch (action.type) {
      case 'SET_USER':
         return { ...state, user: action.payload };

      case 'SET_TOKEN':
         return { ...state, token: action.payload };

      case 'SET_PLAYLISTS':
         return { ...state, playlists: action.payload };

      default:
         return state;
   }
};

export default reducer;
