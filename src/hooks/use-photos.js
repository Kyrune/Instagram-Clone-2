import { useState, useEffect, useContext } from 'react';
import UserContext from '../context/user';
import { getPhotos, getUserByUserId } from '../services/firebase';

export default function usePhotoes() {
    const [photos, setPhotos] = useState(null);
    const {
        user: { uid: userId = '' }
    } = useContext(UserContext);

    useEffect(() => {
        async function getTimeLinePhotos() {
            const [{ following }] = await getUserByUserId(userId);
            let followedUserPhotos = [];

            // console.log('following', following);

            // Is the user following people?
            if (following.length > 0) {
                followedUserPhotos = await getPhotos(userId, following);
            }
            // Arranges photos so the newest is at the top
            followedUserPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
            setPhotos(followedUserPhotos);
        }

        // console.log('userId', userId);

        getTimeLinePhotos();
    }, [userId]);

    return { photos };
}
