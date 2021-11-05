import './App.css';
import {signup, login, logout, useAuth} from "./firebase";
import {useRef, useState} from "react";
import Home from "./Home";

function App() {
    const [loading, setLoading] = useState(false);
    const currentUser = useAuth();

    const emailRef = useRef();
    const passwordRef = useRef();

    async function handleSignup() {
        setLoading(true);
        try {
            await signup(emailRef.current.value, passwordRef.current.value)
        } catch {
            alert('signup Error!')
        }
        setLoading(false);
    }

    async function handleLogin() {
        setLoading(true);
        try {
            await login(emailRef.current.value, passwordRef.current.value)
        } catch {
            alert('login Error!')
        }
        setLoading(false);
    }

    async function handleLogOut() {
        setLoading(true);
        try {
            await logout();
        } catch {
            alert('Logout Error!')
        }
        setLoading(false);
    }

    return (

        <>
            {
                currentUser ? <Home /> :

                    <div id="main">
                        <div> Currently logged in as: {currentUser?.email} </div>
                        <div id="fields">
                            <input ref={emailRef} type="text" placeholder={'E-mail'}/>
                            <input ref={passwordRef} type="password" placeholder={'Password'}/>
                        </div>
                        <button disabled={loading || currentUser} onClick={handleSignup}>Sign Up</button>
                        <button disabled={loading || currentUser} onClick={handleLogin}>Log In</button>
                        <button disabled={loading || !currentUser} onClick={handleLogOut}>Log Out</button>
                    </div>
            }
        </>
    );
}

export default App;
