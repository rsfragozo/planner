export const signIn = (credentials) => {
    return (dispatch, state, {getFirebase}) => {
        const fireabse = getFirebase();

        fireabse.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' });
        }).catch(() => {
            dispatch({ type: 'LOGIN_ERROR' });
        });
    }
}

export const signOut = () => {
    return (dispatch, state, { getFirebase }) => {
        const fireabse = getFirebase();

        fireabse.auth().signOut().then(() => {
            dispatch({ type: 'LOGOUT_SUCCESS' });
        });
    }
}

export const signUp = (user) => {
    return (dispatch, state, { getFirebase, getFirestore }) => {
        const fireabse = getFirebase();
        const firestore = getFirestore();

        fireabse.auth()
            .createUserWithEmailAndPassword(user.email, user.password)
            .then((res) => {
                return firestore.collection('users')
                                .doc(res.user.uid)
                                .set({
                                    firstName: user.firstName,
                                    lastName: user.lastName,
                                    initials: user.firstName[0] + user.lastName[0]
                                })
            }).then(() => {
                dispatch({ type: 'SIGNUP_SUCCESS' });
            }).catch((err) => {
                dispatch({ type: 'SIGNUP_ERROR', err });
            });
    }
}