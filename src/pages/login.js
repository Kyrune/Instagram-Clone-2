import { useHistory } from "react-router";
import { useContext } from 'react';
import FirebaseContext from '../context/firebase';

export default function Login() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    return <p>Login page</p>;
}
