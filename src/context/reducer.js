export const initialState = {
   user: null,
   token: null,
   playlists: [],
   discover_weekly: null,
   playing: false,
   item: null,
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case 'SET_USER':
         return { ...state, user: action.payload };

      case 'SET_TOKEN':
         return { ...state, token: action.payload };

      case 'SET_PLAYLISTS':
         return { ...state, playlists: action.payload };

      case 'SET_DISCOVER_WEEKLY':
         return { ...state, discover_weekly: action.payload };

      default:
         return state;
   }
};

export default reducer;
