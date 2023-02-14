import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../firebase/firebase.config';
export const AuthContext=createContext();
const auth=getAuth(app)

const AuthProvider = ({children}) => {
   const [user, setUser]=useState(null)
   const [loading, setLoading]=useState(true);
   const googleProvider=(Provider)=>{
      setLoading(true)
       return signInWithPopup(auth, Provider)
   }
   const userSignUp=(email, password)=>{
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
   }
   const profileUpdateUser=(profile)=>{
       return updateProfile(auth.currentUser, profile)
   }
   const Login=(email, password)=>{
      setLoading(true)
      return signInWithEmailAndPassword(auth,email, password)
   }
   const LogOut=()=> {
      return signOut(auth )
   }
   useEffect(()=> {
        const unSubsCribe= onAuthStateChanged(auth , (currentUser=> {
              
              setLoading(false)
              setUser(currentUser);
         }) )
         return ()=>{
             unSubsCribe()
         }
   }, [])
   const authInfo={user, userSignUp, Login, LogOut,googleProvider,profileUpdateUser, loading}
    return (
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;