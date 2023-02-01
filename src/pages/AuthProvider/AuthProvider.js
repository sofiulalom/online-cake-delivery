import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from '../../firebase/firebase.config';
export const AuthContext=createContext();
const auth=getAuth(app)

const AuthProvider = ({children}) => {
   const [user, setUser]=useState(null)
   const userSignUp=(email, password)=>{
      return createUserWithEmailAndPassword(auth, email, password)
   }
   const Login=(email, password)=>{
      return signInWithEmailAndPassword(auth,email, password)
   }
   const LogOut=()=> {
      return signOut(auth )
   }
   useEffect(()=> {
        const unSubsCribe= onAuthStateChanged(auth , (currentUser=> {
              console.log(currentUser)
              setUser(currentUser)
         }) )
         return ()=>{
             unSubsCribe()
         }
   }, [])
   const authInfo={user, userSignUp, Login, LogOut}
    return (
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;