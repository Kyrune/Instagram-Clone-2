import { useState, useEffect, useContext } from 'react'
import UserContext from '../context/user';
import { getUserByUserId } from '../services/firebase';

export default function useUser() {
    const [activeUser, setActiveUser] = useState({});
    const { user } = useContext(UserContext);
    
    useEffect(() => {
        // Function calls firebase service to get user data based on ID
        async function getUserObjByUserId() {
            const [response] = await getUserByUserId(user.uid);
            setActiveUser(response);
        }
        if (user?.uid) {
            getUserObjByUserId();
        }
    }, [user]);

    return { user: activeUser };
}
