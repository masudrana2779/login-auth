// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from 'firebase/auth';
import {useEffect, useState} from "react";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZ16HoxG2moBWw8lzAQckQlSqX0dXyqfg",
    authDomain: "login-auth-166ed.firebaseapp.com",
    projectId: "login-auth-166ed",
    storageBucket: "login-auth-166ed.appspot.com",
    messagingSenderId: "398348307466",
    appId: "1:398348307466:web:1683b4d43507c4c76363f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}
export function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

export function logout(){
    return signOut(auth);
}

// custom Hooks
export function useAuth() {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
        return unsub;
    }, [])

    return currentUser;
}