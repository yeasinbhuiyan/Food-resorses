import React, { createContext, useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../../../firebase.config';


export const AuthContext = createContext(null)

const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const createAccount = (email, password) => {
        return createUserWithEmailAndPassword(auth,email, password)
    }




    const loginAccount = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
  

    const logOut = () => {
        return signOut(auth)

    }

    

    const userName = (name) => {
      return  updateProfile(auth.currentUser, {
            displayName: name
            
        })
        .then(()=> setUser((user)=>({...user,displayName: name})))


    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {

            setUser(currentUser)
            setLoading(false)
        })


        return () => { unsubscribe ()}

    }, [])

    const authInfo = {
        createAccount,
        loading,
        logOut,
        loginAccount,
        user,
        auth,
        userName
     

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;