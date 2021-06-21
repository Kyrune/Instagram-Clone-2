import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import FirebaseContext from '../../context/firebase';
import UserContext from '../../context/user';

export default function Actions({ docId, totalLikes, likedPhoto, handleFocus }) {
    const {
        user: { uid: userId = ''}
    } = useContext(UserContext);

    const [toggleLiked, setToggledLiked] = useState(likedPhoto);
    const [likes, setLikes] = useState(totalLikes);
    const { firebase, FieldValue } = useContext(FirebaseContext);

    // Switch toggle Likes
    const handleToggleLiked = async () => {
        setToggledLiked((toggleLiked) => !toggleLiked);
    };
}
