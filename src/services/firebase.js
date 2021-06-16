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

export async function updateLoggedInUserFollowing(
    loggedInUserDocId, 
    profileId, 
    isFollowingProfile 
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
