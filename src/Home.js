import React, {useState} from 'react';
import {logout, useAuth} from "./firebase";

const Home = () => {
    const [loading, setLoading] = useState(false);
    const currentUser = useAuth();

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
        <div id="main">
            <h1>Home</h1>
            <p>{currentUser?.email}</p>
            <button disabled={loading || !currentUser} onClick={handleLogOut}>Log Out</button>
        </div>
    )
}
export default Home;