import { useState, useEffect, useContext } from 'react';
import UserContext from '../context/user';

export default function usePhotoes() {
    const [photos, setPhotos] = useState(null);
    const {
        user: { uid: userId = '' }
    } = useContext(UserContext);

    return { photos };
}
