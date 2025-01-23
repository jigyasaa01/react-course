//step2 : create a context provider

import React from 'react';
import { useState } from 'react';
import UserContext from './USerContext';

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children} {/*children is the component that is wrapped by the provider and the value is accesible to all the components/children*/}
        </UserContext.Provider>
    )
}

export default UserContextProvider