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

// Get user by the ID
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
