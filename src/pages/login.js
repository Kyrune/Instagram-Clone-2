import { useHistory } from "react-router";
import { useState, useContext, useEffect } from 'react';
import FirebaseContext from '../context/firebase';

export default function Login() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    // States
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Check if password and email address exist
    const isInvalid = password === '' || emailAddress === '';

    // Login handler
    const handleLogin = () => {}

    // useEffect
    useEffect(() => {
        document.title = 'title - Instagram';
    }, []);

    return (
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">
            <div className="flex w-3/5">
                <img src="/images/iphone-with-profile.jpg" alt="iPhone with Instagram app" />
            </div>
            <div className="flex flex-col w-2/5">
                <h1 className="flex justify-center w-full">
                    <img src="/images/logo.png" alt="Instagram" className="mt-2 w-6/12 mb-4" />
                </h1>

                {error && <p className="mb-4 text-xs text-red-primary"></p>}

                <form onSubmit={handleLogin} method="POST">
                    <input 
                        aria-label="Enter your email address"
                        type="text"
                        placeholder="Email address"
                        className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2"
                    />
                </form>
            </div>
        </div>
    );
}
