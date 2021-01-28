// Setting up Data Layer to pass data
// This is needed to track the checkout basket

import React, { createContext, useContext, useReducer } from 'react';

// This is the Data Layer
export const StateContext = createContext();

//Building the Provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}{' '}
    {/*Children here is referring to the App that was wrapped in StateProvider on index.js*/}
  </StateContext.Provider>
);

//This is how we are able to use it inside of a component
export const useStateValue = () => useContext(StateContext);
