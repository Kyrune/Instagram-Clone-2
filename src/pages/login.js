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

    return <p>Login page</p>;
}
