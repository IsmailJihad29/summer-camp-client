/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null)

const auth = getAuth(app)


const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const googleProvider = new GoogleAuthProvider()

    // create user 
    const createUser = (email, password) => { 
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email, password)

    }

    // sign in user 
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email, password)
    }

    const googleLogin = () => {
        setLoading(true)
                return signInWithPopup(auth, googleProvider)
    }

    // log out 
    const logOut = () => {
        setLoading(true)
       return signOut(auth)
    }

    // update user 
    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo,
          })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, curentUser => {
            setUser(curentUser)
            setLoading(false)
            console.log( 'curent user',curentUser)
        })
        return () => {
            return unsubscribe()
        }
    },[])

    const authInfo = {
        user,loading,createUser, logIn, logOut, updateUser,googleLogin
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;