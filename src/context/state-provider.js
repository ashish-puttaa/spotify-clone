import React, { createContext, useContext, useReducer } from 'react';

export const StateContext = createContext();

const StateProvider = ({ initialState, reducer, children }) => {
   return (
      <StateContext.Provider value={useReducer(reducer, initialState)}>
         {children}
      </StateContext.Provider>
   );
};

export const useProviderState = () => useContext(StateContext);

export default StateProvider;
