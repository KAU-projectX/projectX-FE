import React, { createContext, useState } from 'react';

export const PlaceContext = createContext();

export const PlaceProvider = ({ children }) => {
  const [placeName, setPlaceName] = useState('');

  return (
    <PlaceContext.Provider value={{ placeName, setPlaceName }}>
      {children}
    </PlaceContext.Provider>
  );
};