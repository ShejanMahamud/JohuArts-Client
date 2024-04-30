import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { Toaster } from "react-hot-toast";
import auth from './../config/firebase.config';
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

const [user,setUser] = useState(null);
const [loading,setLoading] = useState(true);
const [updateUser,setUpdateUser] = useState(false)

const emailPassRegister = (email,password) => {
  return createUserWithEmailAndPassword(auth,email,password)
}

const googleLogin = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth,googleProvider)
}

const githubLogin = () => {
  const githubProvider = new GithubAuthProvider();
  return signInWithPopup(auth,githubProvider)
}

const logOut = () => {
    return signOut(auth)
}

const profileUpdate = (name,photo) => {
 return updateProfile(auth.currentUser,{
    displayName: name,
    photoURL: photo
  })
}

useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
        setLoading(false)
        setUser(currentUser)
    })
    return () => unSubscribe();
},[user,updateUser])

const authInfo = {googleLogin,logOut,user,loading,emailPassRegister,githubLogin,profileUpdate,setUpdateUser,updateUser}
    
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
        <Toaster
  position="top-right"
  reverseOrder={true}
/>
    </AuthContext.Provider>
  )
}

export default AuthProvider