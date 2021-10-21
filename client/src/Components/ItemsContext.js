/* eslint-disable react/destructuring-assignment */
import React, { createContext, useState } from 'react';

export const ItemsContext = createContext();

export const ItemsProvider = (props) => {
  // Place global state here as needed
  // Ensure that state is also added to the wrapper in the return value
  // To use the context, import { ItemsContext } from this file and
  // set the value equal to the needed state, e.g.:
  // const { isLoggedIn } = useContext(ItemsContext);

  const [displayItems, setDisplayItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    userFirst: 'Jeffrey',
    userLast: 'Dahmer',
    userPFP: 'https://i.imgur.com/dNZcaDv.png',
    userPhone: '(608) 742-9100',
    userEmail: 'luv2eatU@gmail.com',
    userAddress1: '2925 Columbia Drive',
    userAddress2: '#127',
    userCity: 'Portage',
    userState: 'WI',
    userZIP: '53901',
    activeItem: 'fill me in',
    prevTrades: 'fill me in, too',
  });
  const [apiUrl, setApiUrl] = useState(
    'http://localhost:5001/red-paperclip-73a89/us-central1/api'
  );

  return (
    <ItemsContext.Provider
      value={{
        // Add global state here
        displayItemsState: [displayItems, setDisplayItems],
        isLoggedInState: [isLoggedIn, setIsLoggedIn],
        isAdminState: [isAdmin, setIsAdmin],
        currentUser: [currentUser, setCurrentUser],
        apiUrlState: [apiUrl, setApiUrl],
      }}
    >
      {props.children}
    </ItemsContext.Provider>
  );
};
