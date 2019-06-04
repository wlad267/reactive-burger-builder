import React from 'react';

const authContext = React.createContext(
    { authicated: false, 
      login: ()=> { console.log('login ');}
    });

export default authContext;
