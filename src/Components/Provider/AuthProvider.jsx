import React, { createContext, useEffect, useState } from 'react';


export const AuthContext = createContext(null)

const auth = getAuth()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading,setLoading] = useState(true)


    const createAccount = () => {
        return
    }


    const loginAccount = () => {
        return
    }


    const logOut = () => {
        return

    }


    useEffect(() => {
        const unsubscribe = f(auth, currentUser => {

            setUser(currentUser)
            setLoading(false)
        })


        return ()=>{unsubscribe}

    }, [])

    const authInfo = {
        createAccount,
        loading,
        logOut,
        loginAccount,
        user

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;