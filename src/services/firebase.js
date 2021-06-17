import { firebase, FieldValue } from '../lib/firebase';

// Checks if Username exists
export async function doesUsernameExist(username) {
    const result = await firebase   
        .firestore()
        .collection('users')
        .where('username', '==', username)
        .get();

        // console.log(result);

        return result.docs.map((user) => user.data().length > 0);
};

// Get user from Firestore where userId === userId (passed from the auth)
export async function getUserByUserId(userId) {
    const result = await firebase
        .firestore()
        .collection('users')
        .where('userId', '==', userId)
        .get();

        const user = result.docs.map((item) => ({
            ...item.data(),
            docId: item.id
        }));

        return user;
}

// Gets a list of 10 suggested profiles for user
export async function getSuggestedProfiles(userId, following) {
    const result = await firebase
        .firestore()
        .collection('users')
        .limit(10)
        .get();

        // console.log(result);
        
        // Get list of users, but ensure current user's profile and already followed users aren't listed. 
        return result.docs
            .map((user) => ({ ...user.data(), docId: user.id }))
            .filter((profile) => profile.userId !== userId && !following.includes(profile.userId));
}

// Updates list of suggested users if current user follows (serves as a toggle)
export async function updateLoggedInUserFollowing(
    loggedInUserDocId, // Passes in currently logged in user document id (user's profile)
    profileId, // The user that current user requests to follow
    isFollowingProfile // True/false - is current user following this user?
    ) {
    return firebase
        .firestore()
        .collection('users')
        .doc(loggedInUserDocId)
        .update({
            following: isFollowingProfile
                ? FieldValue.arrayRemove(profileId)
                : FieldValue.arrayUnion(profileId)
        });
}

// Update other user's followers array (basically a switch)
export async function updateFollowedUserFollowers(
    profileDocId, // Passes in currently logged in user document id (user's profile)
    loggedInUserDocId, // The user that current user requests to follow
    isFollowingProfile // True/false - is current user following this user?
    ) {
    return firebase
        .firestore()
        .collection('users')
        .doc(profileDocId)
        .update({
            followers: isFollowingProfile
                ? FieldValue.arrayRemove(loggedInUserDocId)
                : FieldValue.arrayUnion(loggedInUserDocId)
        });
}

export async function getPhotos(userId, following) {
    const result = await firebase
        .firestore()
        .collection('photos')
        .where('userId', 'in', following)
        .get();

        const userFollowedPhotos = result.doc.map((photo) => ({
            ...photo.data(),
            docId: photo.id
        }));

        const photosWithUserDetails = await Promise.all(
            userFollowedPhotos.map(async (photo) => {
                let userLikedPhoto = false;
                if (photo.likes.includes(userId)) {
                    userLikedPhoto = true;
                }
                const user = await getUserByUserId(photo.userId);
                const { username } = user[0];
            })
        )
}
